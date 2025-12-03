package telerik.demo.datasource;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Describes aggregate operations.
 */
public class AggregateDescriptor {
    
    @JsonProperty("field")
    private String field;
    
    @JsonProperty("aggregate")
    private String aggregate; // "count", "sum", "average", "min", "max"

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getAggregate() {
        return aggregate;
    }

    public void setAggregate(String aggregate) {
        this.aggregate = aggregate;
    }
}
