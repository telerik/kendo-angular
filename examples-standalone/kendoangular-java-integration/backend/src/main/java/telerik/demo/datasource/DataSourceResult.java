package telerik.demo.datasource;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import java.util.Map;

/**
 * Represents the result of a data source request.
 * Contains the data, total count, and aggregate results.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DataSourceResult {
    
    @JsonProperty("data")
    private Object data;
    
    @JsonProperty("total")
    private long total;
    
    @JsonProperty("aggregates")
    private Map<String, Object> aggregates;

    public DataSourceResult() {
    }

    public DataSourceResult(Object data, long total) {
        this.data = data;
        this.total = total;
    }

    public DataSourceResult(Object data, long total, Map<String, Object> aggregates) {
        this.data = data;
        this.total = total;
        this.aggregates = aggregates;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public Map<String, Object> getAggregates() {
        return aggregates;
    }

    public void setAggregates(Map<String, Object> aggregates) {
        this.aggregates = aggregates;
    }
}
