package vn.codegym.su_dung_adobe_color.dto;


import vn.codegym.su_dung_adobe_color.model.ProductCode;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;


public class ProductDto {

    private Long id;
    @NotBlank(message = "ten product khoong duoc de trong")
    private String name;
    @NotBlank(message = "khong duoc de trong truong nay")
    @Min(value = 1000000,message = "gia tri product > hon 1000000")
    @Max(value = 100000000,message = "gia tri product < hon 100000000")
    private String prince;
    private ProductCode productCode;

    public ProductDto() {
    }

    public ProductDto(Long id, String name, String prince, ProductCode productCode) {
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
