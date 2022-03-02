package vn.codegym.su_dung_adobe_color.model;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String prince;
    @ManyToOne(targetEntity = ProductCode.class)
    private ProductCode productCode;

    public Product() {
    }

    public Product(Long id, String name, String prince, ProductCode productCode) {
        this.id = id;
        this.name = name;
        this.prince = prince;
        this.productCode = productCode;
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

    public String getPrince() {
        return prince;
    }

    public void setPrince(String prince) {
        this.prince = prince;
    }

    public ProductCode getProductCode() {
        return productCode;
    }

    public void setProductCode(ProductCode productCode) {
        this.productCode = productCode;
    }
}
