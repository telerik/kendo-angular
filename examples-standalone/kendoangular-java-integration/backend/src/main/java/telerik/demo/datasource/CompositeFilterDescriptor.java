package telerik.demo.datasource;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

/**
 * Describes a composite filter (multiple filters combined with AND/OR logic).
 */
public class CompositeFilterDescriptor {
    
    @JsonProperty("logic")
    private String logic; // "and" or "or"
    
    @JsonProperty("filters")
    private List<Object> filters; // Can be FilterDescriptor or CompositeFilterDescriptor

    public String getLogic() {
        return logic;
    }

    public void setLogic(String logic) {
        this.logic = logic;
    }

    public List<Object> getFilters() {
        return filters;
    }

    public void setFilters(List<Object> filters) {
        this.filters = filters;
    }
    
    public boolean isAnd() {
        return "and".equalsIgnoreCase(logic);
    }
}
