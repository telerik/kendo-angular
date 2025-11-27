package telerik.demo.datasource;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.util.*;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Provides extension methods to process DataSourceRequest.
 * This is the Java equivalent of the ASP.NET Core Kendo DataSource extensions.
 */
public class QueryableExtensions {

    /**
     * Applies paging, sorting, filtering and grouping using the information from the DataSourceRequest object.
     *
     * @param data    The source data collection
     * @param request The DataSourceRequest containing filter, sort, page, group information
     * @param <T>     The type of elements in the data collection
     * @return A DataSourceResult object containing the processed data
     */
    public static <T> DataSourceResult toDataSourceResult(List<T> data, DataSourceRequest request) {
        if (data == null) {
            return new DataSourceResult(Collections.emptyList(), 0);
        }

        Stream<T> stream = data.stream();

        // Apply filtering
        if (request.getFilter() != null && request.getFilter().getFilters() != null && !request.getFilter().getFilters().isEmpty()) {
            Predicate<T> filterPredicate = buildFilterPredicate(request.getFilter());
            stream = stream.filter(filterPredicate);
        }

        // Collect to list for counting and further operations
        List<T> filteredData = stream.collect(Collectors.toList());

        // Calculate aggregates before paging
        Map<String, Object> aggregates = null;
        if (request.getAggregate() != null && !request.getAggregate().isEmpty()) {
            aggregates = calculateAggregates(filteredData, request.getAggregate());
        }

        // Get total count after filtering (before paging)
        long total = filteredData.size();

        // Apply sorting
        if (request.getSort() != null && !request.getSort().isEmpty()) {
            filteredData = applySort(filteredData, request.getSort());
        }

        // Apply grouping (grouping should NOT be affected by paging unless groupPaging is enabled)
        if (request.getGroup() != null && !request.getGroup().isEmpty()) {
            List<GroupResult> groupedData = applyGrouping(filteredData, request.getGroup(), 0);
            
            // Wrap groups in a parent group structure to match Kendo's client-side process behavior
            // The client expects: [{aggregates: {}, field: "fieldName", items: [actual groups]}]
            GroupResult wrapper = new GroupResult();
            wrapper.setAggregates(aggregates != null ? aggregates : new HashMap<>());
            wrapper.setField(request.getGroup().get(0).getField());
            wrapper.setItems(groupedData);
            
            List<GroupResult> wrappedGroups = new ArrayList<>();
            wrappedGroups.add(wrapper);
            
            if (request.isGroupPaging()) {
                // If group paging is enabled, page the groups themselves
                total = groupedData.size();
                if (request.getPageSize() > 0) {
                    int skip = request.getSkip();
                    int take = request.getPageSize();
                    List<GroupResult> pagedGroups = groupedData.stream()
                            .skip(skip)
                            .limit(take)
                            .collect(Collectors.toList());
                    wrapper.setItems(pagedGroups);
                }
            }
            // When grouping without groupPaging, return ALL groups (no paging applied)
            return new DataSourceResult(wrappedGroups, total, aggregates);
        }

        // Apply paging (only when NOT grouping)
        int skip = request.getSkip();
        int take = request.getPageSize() > 0 ? request.getPageSize() : request.getTake();

        if (take > 0) {
            filteredData = filteredData.stream()
                    .skip(skip)
                    .limit(take)
                    .collect(Collectors.toList());
        } else if (skip > 0) {
            filteredData = filteredData.stream()
                    .skip(skip)
                    .collect(Collectors.toList());
        }

        return new DataSourceResult(filteredData, total, aggregates);
    }

    /**
     * Builds a filter predicate from a CompositeFilterDescriptor
     */
    private static <T> Predicate<T> buildFilterPredicate(CompositeFilterDescriptor compositeFilter) {
        if (compositeFilter == null || compositeFilter.getFilters() == null || compositeFilter.getFilters().isEmpty()) {
            return item -> true;
        }

        List<Predicate<T>> predicates = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();

        for (Object filterObj : compositeFilter.getFilters()) {
            if (filterObj instanceof Map) {
                Map<String, Object> filterMap = (Map<String, Object>) filterObj;
                
                // Check if it's a composite filter (has 'logic' and 'filters')
                if (filterMap.containsKey("logic") && filterMap.containsKey("filters")) {
                    CompositeFilterDescriptor nestedComposite = mapper.convertValue(filterMap, CompositeFilterDescriptor.class);
                    predicates.add(buildFilterPredicate(nestedComposite));
                } else {
                    // It's a simple filter descriptor
                    FilterDescriptor filter = mapper.convertValue(filterMap, FilterDescriptor.class);
                    predicates.add(buildSingleFilterPredicate(filter));
                }
            } else if (filterObj instanceof CompositeFilterDescriptor) {
                predicates.add(buildFilterPredicate((CompositeFilterDescriptor) filterObj));
            } else if (filterObj instanceof FilterDescriptor) {
                predicates.add(buildSingleFilterPredicate((FilterDescriptor) filterObj));
            }
        }

        // Combine predicates with AND or OR
        if (compositeFilter.isAnd()) {
            return predicates.stream().reduce(Predicate::and).orElse(item -> true);
        } else {
            return predicates.stream().reduce(Predicate::or).orElse(item -> false);
        }
    }

    /**
     * Builds a predicate for a single filter descriptor
     */
    private static <T> Predicate<T> buildSingleFilterPredicate(FilterDescriptor filter) {
        return item -> {
            try {
                Object fieldValue = getFieldValue(item, filter.getField());
                Object filterValue = filter.getValue();
                String operator = filter.getOperator();

                if (fieldValue == null) {
                    return "isnull".equalsIgnoreCase(operator) || "isempty".equalsIgnoreCase(operator);
                }

                if ("isnotnull".equalsIgnoreCase(operator) || "isnotempty".equalsIgnoreCase(operator)) {
                    return true;
                }

                switch (operator.toLowerCase()) {
                    case "eq":
                    case "equals":
                        return compareEquals(fieldValue, filterValue, filter.isIgnoreCase());
                    case "neq":
                    case "notequals":
                        return !compareEquals(fieldValue, filterValue, filter.isIgnoreCase());
                    case "contains":
                        return compareContains(fieldValue, filterValue, filter.isIgnoreCase());
                    case "doesnotcontain":
                        return !compareContains(fieldValue, filterValue, filter.isIgnoreCase());
                    case "startswith":
                        return compareStartsWith(fieldValue, filterValue, filter.isIgnoreCase());
                    case "endswith":
                        return compareEndsWith(fieldValue, filterValue, filter.isIgnoreCase());
                    case "gt":
                    case "greaterthan":
                        return compareGreaterThan(fieldValue, filterValue);
                    case "gte":
                    case "greaterthanorequal":
                        return compareGreaterThanOrEqual(fieldValue, filterValue);
                    case "lt":
                    case "lessthan":
                        return compareLessThan(fieldValue, filterValue);
                    case "lte":
                    case "lessthanorequal":
                        return compareLessThanOrEqual(fieldValue, filterValue);
                    default:
                        return true;
                }
            } catch (Exception e) {
                return false;
            }
        };
    }

    /**
     * Gets the value of a field from an object using reflection
     */
    private static Object getFieldValue(Object obj, String fieldName) throws Exception {
        if (obj == null || fieldName == null) {
            return null;
        }

        // Handle nested fields (e.g., "address.city")
        String[] fieldParts = fieldName.split("\\.");
        Object currentObj = obj;

        for (String part : fieldParts) {
            if (currentObj == null) {
                return null;
            }

            Class<?> clazz = currentObj.getClass();
            Field field = findField(clazz, part);
            
            if (field != null) {
                field.setAccessible(true);
                currentObj = field.get(currentObj);
            } else {
                // Try getter method
                String getterName = "get" + part.substring(0, 1).toUpperCase() + part.substring(1);
                try {
                    currentObj = clazz.getMethod(getterName).invoke(currentObj);
                } catch (Exception e) {
                    return null;
                }
            }
        }

        return currentObj;
    }

    /**
     * Finds a field in a class or its superclasses
     */
    private static Field findField(Class<?> clazz, String fieldName) {
        while (clazz != null) {
            try {
                return clazz.getDeclaredField(fieldName);
            } catch (NoSuchFieldException e) {
                clazz = clazz.getSuperclass();
            }
        }
        return null;
    }

    // Comparison methods
    private static boolean compareEquals(Object fieldValue, Object filterValue, boolean ignoreCase) {
        if (fieldValue == null && filterValue == null) return true;
        if (fieldValue == null || filterValue == null) return false;

        if (fieldValue instanceof String && filterValue instanceof String) {
            String fv = (String) fieldValue;
            String filter = (String) filterValue;
            return ignoreCase ? fv.equalsIgnoreCase(filter) : fv.equals(filter);
        }

        // Handle numeric comparisons - convert to same type first
        if (fieldValue instanceof Number && filterValue instanceof Number) {
            Number numField = (Number) fieldValue;
            Number numFilter = (Number) filterValue;
            // Compare as doubles to handle all numeric types
            return Math.abs(numField.doubleValue() - numFilter.doubleValue()) < 0.0000001;
        }

        return fieldValue.equals(filterValue);
    }

    private static boolean compareContains(Object fieldValue, Object filterValue, boolean ignoreCase) {
        if (!(fieldValue instanceof String) || !(filterValue instanceof String)) {
            return false;
        }
        String fv = (String) fieldValue;
        String filter = (String) filterValue;
        return ignoreCase ? fv.toLowerCase().contains(filter.toLowerCase()) : fv.contains(filter);
    }

    private static boolean compareStartsWith(Object fieldValue, Object filterValue, boolean ignoreCase) {
        if (!(fieldValue instanceof String) || !(filterValue instanceof String)) {
            return false;
        }
        String fv = (String) fieldValue;
        String filter = (String) filterValue;
        return ignoreCase ? fv.toLowerCase().startsWith(filter.toLowerCase()) : fv.startsWith(filter);
    }

    private static boolean compareEndsWith(Object fieldValue, Object filterValue, boolean ignoreCase) {
        if (!(fieldValue instanceof String) || !(filterValue instanceof String)) {
            return false;
        }
        String fv = (String) fieldValue;
        String filter = (String) filterValue;
        return ignoreCase ? fv.toLowerCase().endsWith(filter.toLowerCase()) : fv.endsWith(filter);
    }

    @SuppressWarnings("unchecked")
    private static boolean compareGreaterThan(Object fieldValue, Object filterValue) {
        if (fieldValue instanceof Comparable && filterValue != null) {
            // Handle primitive types by boxing them first
            Comparable<Object> comparable = toComparable(fieldValue);
            Object convertedFilter = convertToNumericType(filterValue, fieldValue);
            return comparable.compareTo(convertedFilter) > 0;
        }
        return false;
    }

    @SuppressWarnings("unchecked")
    private static boolean compareGreaterThanOrEqual(Object fieldValue, Object filterValue) {
        if (fieldValue instanceof Comparable && filterValue != null) {
            Comparable<Object> comparable = toComparable(fieldValue);
            Object convertedFilter = convertToNumericType(filterValue, fieldValue);
            return comparable.compareTo(convertedFilter) >= 0;
        }
        return false;
    }

    @SuppressWarnings("unchecked")
    private static boolean compareLessThan(Object fieldValue, Object filterValue) {
        if (fieldValue instanceof Comparable && filterValue != null) {
            Comparable<Object> comparable = toComparable(fieldValue);
            Object convertedFilter = convertToNumericType(filterValue, fieldValue);
            return comparable.compareTo(convertedFilter) < 0;
        }
        return false;
    }

    @SuppressWarnings("unchecked")
    private static boolean compareLessThanOrEqual(Object fieldValue, Object filterValue) {
        if (fieldValue instanceof Comparable && filterValue != null) {
            Comparable<Object> comparable = toComparable(fieldValue);
            Object convertedFilter = convertToNumericType(filterValue, fieldValue);
            return comparable.compareTo(convertedFilter) <= 0;
        }
        return false;
    }

    /**
     * Converts a value to a Comparable, handling primitive types
     */
    @SuppressWarnings("unchecked")
    private static Comparable<Object> toComparable(Object value) {
        if (value instanceof Comparable) {
            return (Comparable<Object>) value;
        }
        throw new IllegalArgumentException("Value is not comparable: " + value);
    }

    /**
     * Converts filter value to the same numeric type as field value
     */
    private static Object convertToNumericType(Object filterValue, Object fieldValue) {
        if (filterValue == null) return null;
        
        // If types already match, return as is
        if (filterValue.getClass().equals(fieldValue.getClass())) {
            return filterValue;
        }
        
        // Convert to the target type
        Class<?> targetType = fieldValue.getClass();
        
        try {
            // Handle all numeric types
            if (targetType == Double.class || targetType == double.class) {
                if (filterValue instanceof Number) {
                    return ((Number) filterValue).doubleValue();
                }
                return Double.parseDouble(filterValue.toString());
            } else if (targetType == Float.class || targetType == float.class) {
                if (filterValue instanceof Number) {
                    return ((Number) filterValue).floatValue();
                }
                return Float.parseFloat(filterValue.toString());
            } else if (targetType == Integer.class || targetType == int.class) {
                if (filterValue instanceof Number) {
                    return ((Number) filterValue).intValue();
                }
                return Integer.parseInt(filterValue.toString());
            } else if (targetType == Long.class || targetType == long.class) {
                if (filterValue instanceof Number) {
                    return ((Number) filterValue).longValue();
                }
                return Long.parseLong(filterValue.toString());
            } else if (targetType == BigDecimal.class) {
                if (filterValue instanceof Number) {
                    return BigDecimal.valueOf(((Number) filterValue).doubleValue());
                }
                return new BigDecimal(filterValue.toString());
            }
        } catch (Exception e) {
            // Fall back to string-based conversion
        }
        
        return filterValue;
    }

    /**
     * Converts a value to the target type
     */
    private static Object convertToSameType(Object value, Class<?> targetType) {
        if (value == null) return null;
        if (targetType.isInstance(value)) return value;

        try {
            if (targetType == Integer.class || targetType == int.class) {
                return Integer.parseInt(value.toString());
            } else if (targetType == Long.class || targetType == long.class) {
                return Long.parseLong(value.toString());
            } else if (targetType == Double.class || targetType == double.class) {
                return Double.parseDouble(value.toString());
            } else if (targetType == Float.class || targetType == float.class) {
                return Float.parseFloat(value.toString());
            } else if (targetType == BigDecimal.class) {
                return new BigDecimal(value.toString());
            } else if (targetType == Boolean.class || targetType == boolean.class) {
                return Boolean.parseBoolean(value.toString());
            }
        } catch (Exception e) {
            // Return original value if conversion fails
        }

        return value;
    }

    /**
     * Applies sorting to the data
     */
    private static <T> List<T> applySort(List<T> data, List<SortDescriptor> sortDescriptors) {
        if (sortDescriptors == null || sortDescriptors.isEmpty()) {
            return data;
        }

        Comparator<T> comparator = null;

        for (SortDescriptor sort : sortDescriptors) {
            Comparator<T> fieldComparator = (item1, item2) -> {
                try {
                    Object value1 = getFieldValue(item1, sort.getField());
                    Object value2 = getFieldValue(item2, sort.getField());

                    if (value1 == null && value2 == null) return 0;
                    if (value1 == null) return sort.isAscending() ? -1 : 1;
                    if (value2 == null) return sort.isAscending() ? 1 : -1;

                    @SuppressWarnings("unchecked")
                    Comparable<Object> comparable1 = (Comparable<Object>) value1;
                    int result = comparable1.compareTo(value2);

                    return sort.isAscending() ? result : -result;
                } catch (Exception e) {
                    return 0;
                }
            };

            comparator = (comparator == null) ? fieldComparator : comparator.thenComparing(fieldComparator);
        }

        return data.stream()
                .sorted(comparator)
                .collect(Collectors.toList());
    }

    /**
     * Applies grouping to the data
     */
    private static <T> List<GroupResult> applyGrouping(List<T> data, List<GroupDescriptor> groupDescriptors, int level) {
        if (groupDescriptors == null || groupDescriptors.isEmpty() || level >= groupDescriptors.size()) {
            return Collections.emptyList();
        }

        GroupDescriptor currentGroup = groupDescriptors.get(level);
        Map<Object, List<T>> grouped = data.stream()
                .collect(Collectors.groupingBy(item -> {
                    try {
                        return getFieldValue(item, currentGroup.getField());
                    } catch (Exception e) {
                        return null;
                    }
                }));

        List<GroupResult> results = new ArrayList<>();
        boolean hasMoreGroups = level + 1 < groupDescriptors.size();

        for (Map.Entry<Object, List<T>> entry : grouped.entrySet()) {
            GroupResult groupResult = new GroupResult();
            groupResult.setField(currentGroup.getField());
            groupResult.setValue(entry.getKey());

            if (hasMoreGroups) {
                // Recursively group
                List<GroupResult> subGroups = applyGrouping(entry.getValue(), groupDescriptors, level + 1);
                groupResult.setItems(subGroups);
                groupResult.setHasSubgroups(true);
                // Count total items in all subgroups
                int totalItems = subGroups.stream()
                        .mapToInt(g -> g.getItemCount() != null ? g.getItemCount() : 0)
                        .sum();
                groupResult.setItemCount(totalItems);
            } else {
                groupResult.setItems(entry.getValue());
                groupResult.setHasSubgroups(false);
                groupResult.setItemCount(entry.getValue().size());
            }

            // Calculate aggregates for this group
            if (currentGroup.getAggregates() != null && !currentGroup.getAggregates().isEmpty()) {
                List<AggregateDescriptor> aggregateDescriptors = currentGroup.getAggregates().stream()
                        .map(af -> {
                            AggregateDescriptor ad = new AggregateDescriptor();
                            ad.setField(af.getField());
                            ad.setAggregate(af.getAggregate());
                            return ad;
                        })
                        .collect(Collectors.toList());
                
                Map<String, Object> aggregates = calculateAggregates(entry.getValue(), aggregateDescriptors);
                groupResult.setAggregates(aggregates);
            }

            results.add(groupResult);
        }

        return results;
    }

    /**
     * Calculates aggregate results
     */
    private static <T> Map<String, Object> calculateAggregates(List<T> data, List<AggregateDescriptor> aggregateDescriptors) {
        Map<String, Object> results = new LinkedHashMap<>();

        for (AggregateDescriptor agg : aggregateDescriptors) {
            String key = agg.getField() + "_" + agg.getAggregate();
            Object result = calculateAggregate(data, agg.getField(), agg.getAggregate());
            
            if (result != null) {
                // Also store with just the field name for nested aggregates
                Map<String, Object> aggMap = new LinkedHashMap<>();
                aggMap.put(agg.getAggregate(), result);
                results.put(agg.getField(), aggMap);
            }
        }

        return results;
    }

    /**
     * Calculates a single aggregate
     */
    private static <T> Object calculateAggregate(List<T> data, String field, String aggregateType) {
        if (data == null || data.isEmpty()) {
            return null;
        }

        try {
            switch (aggregateType.toLowerCase()) {
                case "count":
                    return (long) data.size();

                case "sum":
                    return data.stream()
                            .map(item -> {
                                try {
                                    Object value = getFieldValue(item, field);
                                    return value != null ? ((Number) value).doubleValue() : 0.0;
                                } catch (Exception e) {
                                    return 0.0;
                                }
                            })
                            .mapToDouble(Double::doubleValue)
                            .sum();

                case "average":
                case "avg":
                    return data.stream()
                            .map(item -> {
                                try {
                                    Object value = getFieldValue(item, field);
                                    return value != null ? ((Number) value).doubleValue() : null;
                                } catch (Exception e) {
                                    return null;
                                }
                            })
                            .filter(Objects::nonNull)
                            .mapToDouble(Double::doubleValue)
                            .average()
                            .orElse(0.0);

                case "min":
                    return data.stream()
                            .map(item -> {
                                try {
                                    Object value = getFieldValue(item, field);
                                    return value != null ? ((Number) value).doubleValue() : null;
                                } catch (Exception e) {
                                    return null;
                                }
                            })
                            .filter(Objects::nonNull)
                            .mapToDouble(Double::doubleValue)
                            .min()
                            .orElse(0.0);

                case "max":
                    return data.stream()
                            .map(item -> {
                                try {
                                    Object value = getFieldValue(item, field);
                                    return value != null ? ((Number) value).doubleValue() : null;
                                } catch (Exception e) {
                                    return null;
                                }
                            })
                            .filter(Objects::nonNull)
                            .mapToDouble(Double::doubleValue)
                            .max()
                            .orElse(0.0);

                default:
                    return null;
            }
        } catch (Exception e) {
            return null;
        }
    }
}
