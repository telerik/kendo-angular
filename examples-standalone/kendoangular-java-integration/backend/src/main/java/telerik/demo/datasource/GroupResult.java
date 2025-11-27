package telerik.demo.datasource;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import java.util.Map;

/**
 * Represents a group result with items and aggregates.
 * This matches the Kendo Grid's expected group structure.
 */
public class GroupResult {
    
    @JsonProperty("field")
    private String field;
    
    @JsonProperty("value")
    private Object value;
    
    @JsonProperty("aggregates")
    private Map<String, Object> aggregates;
    
    @JsonProperty("items")
    private List<?> items;
    
    @JsonProperty("hasSubgroups")
    private Boolean hasSubgroups;
    
    @JsonProperty("itemCount")
    private Integer itemCount;

    public GroupResult() {
    }

    public GroupResult(String field, Object value, List<?> items) {
        this.field = field;
        this.value = value;
        this.items = items;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    public Map<String, Object> getAggregates() {
        return aggregates;
    }

    public void setAggregates(Map<String, Object> aggregates) {
        this.aggregates = aggregates;
    }

    public List<?> getItems() {
        return items;
    }

    public void setItems(List<?> items) {
        this.items = items;
    }

    public Boolean getHasSubgroups() {
        return hasSubgroups;
    }

    public void setHasSubgroups(Boolean hasSubgroups) {
        this.hasSubgroups = hasSubgroups;
    }

    public Integer getItemCount() {
        return itemCount;
    }

    public void setItemCount(Integer itemCount) {
        this.itemCount = itemCount;
    }
}
