package vn.codegym.su_dung_adobe_color.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.codegym.su_dung_adobe_color.model.Product;


public interface IProductService {

    Page<Product> getAll(String key_search, String productCodeId, Pageable pageable);

    Product findId(Long id);

    void edit(Product product);

    void add(Product product);

    void delete(Long id);
}
