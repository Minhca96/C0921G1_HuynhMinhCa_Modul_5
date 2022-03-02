package vn.codegym.su_dung_adobe_color.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class ProductCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "productCode")
    private List<Product> product;

    public ProductCode() {
    }

    public ProductCode(Long id, String name, List<Product> product) {
        this.id = id;
        this.name = name;
        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Product> getProduct() {
        return product;
    }

    public void setProduct(List<Product> product) {
        this.product = product;
    }
}
