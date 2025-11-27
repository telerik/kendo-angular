package telerik.demo.datasource;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Represents a data source request from Kendo UI Grid.
 * Contains information about paging, sorting, filtering, grouping and aggregates.
 */
public class DataSourceRequest {
    
    @JsonProperty("skip")
    private int skip = 0;
    
    @JsonProperty("take")
    private int take = 0;
    
    @JsonProperty("page")
    private int page = 1;
    
    @JsonProperty("pageSize")
    private int pageSize = 0;
    
    @JsonProperty("sort")
    private List<SortDescriptor> sort;
    
    @JsonProperty("filter")
    private CompositeFilterDescriptor filter;
    
    @JsonProperty("group")
    private List<GroupDescriptor> group;
    
    @JsonProperty("aggregate")
    private List<AggregateDescriptor> aggregate;
    
    @JsonProperty("groupPaging")
    private boolean groupPaging = false;

    public int getSkip() {
        return skip;
    }

    public void setSkip(int skip) {
        this.skip = skip;
    }

    public int getTake() {
        return take;
    }

    public void setTake(int take) {
        this.take = take;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public List<SortDescriptor> getSort() {
        return sort;
    }

    public void setSort(List<SortDescriptor> sort) {
        this.sort = sort;
    }

    public CompositeFilterDescriptor getFilter() {
        return filter;
    }

    public void setFilter(CompositeFilterDescriptor filter) {
        this.filter = filter;
    }

    public List<GroupDescriptor> getGroup() {
        return group;
    }

    public void setGroup(List<GroupDescriptor> group) {
        this.group = group;
    }

    public List<AggregateDescriptor> getAggregate() {
        return aggregate;
    }

    public void setAggregate(List<AggregateDescriptor> aggregate) {
        this.aggregate = aggregate;
    }

    public boolean isGroupPaging() {
        return groupPaging;
    }

    public void setGroupPaging(boolean groupPaging) {
        this.groupPaging = groupPaging;
    }
}
