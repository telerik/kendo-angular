package telerik.demo.datasource;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Describes a filter operation on a single field.
 */
public class FilterDescriptor {
    
    @JsonProperty("field")
    private String field;
    
    @JsonProperty("operator")
    private String operator;
    
    @JsonProperty("value")
    private Object value;
    
    @JsonProperty("ignoreCase")
    private boolean ignoreCase = true;

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    public boolean isIgnoreCase() {
        return ignoreCase;
    }

    public void setIgnoreCase(boolean ignoreCase) {
        this.ignoreCase = ignoreCase;
    }
}
