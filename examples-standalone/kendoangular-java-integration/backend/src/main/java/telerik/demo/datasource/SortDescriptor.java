package telerik.demo.datasource;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Describes a sort operation.
 */
public class SortDescriptor {
    
    @JsonProperty("field")
    private String field;
    
    @JsonProperty("dir")
    private String dir; // "asc" or "desc"

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
    
    public boolean isAscending() {
        return !"desc".equalsIgnoreCase(dir);
    }
}
