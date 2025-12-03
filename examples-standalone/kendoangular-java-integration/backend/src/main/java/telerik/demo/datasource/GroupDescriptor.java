package telerik.demo.datasource;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Describes a grouping operation.
 */
public class GroupDescriptor {
    
    @JsonProperty("field")
    private String field;
    
    @JsonProperty("dir")
    private String dir; // "asc" or "desc"
    
    @JsonProperty("aggregates")
    private List<AggregateFunction> aggregates;

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getDir() {
        return dir;
    }

    public void setDir(String dir) {
        this.dir = dir;
    }

    public List<AggregateFunction> getAggregates() {
        return aggregates;
    }

    public void setAggregates(List<AggregateFunction> aggregates) {
        this.aggregates = aggregates;
    }
}
