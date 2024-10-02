package telerik.demo.models;
import java.util.List;

// public class ProductDataResult {
//     private List<Product> data;
//     private int total;

//     public ProductDataResult(List<Product> data, int total) {
//         this.data = data;
//         this.total = total;
//     }

//     public List<Product> getData() {
//         return data;
//     }

//     public void setData(List<Product> data) {
//         this.data = data;
//     }

//     public int getTotal() {
//         return total;
//     }

//     public void setTotal(int total) {
//         this.total = total;
//     }
// }
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
