package telerik.demo.models;
import java.util.List;
public class ProductDataResult {
    private List<Product> data;
    private long total;

    public ProductDataResult(List<Product> data, long total) {
        this.data = data;
        this.total = total;
    }

    public List<Product> getData() {
        return data;
    }

    public long getTotal() {
        return total;
    }
}
