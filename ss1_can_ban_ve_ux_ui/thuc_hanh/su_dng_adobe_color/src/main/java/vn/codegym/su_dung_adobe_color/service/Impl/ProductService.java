package vn.codegym.su_dung_adobe_color.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.codegym.su_dung_adobe_color.model.Product;
import vn.codegym.su_dung_adobe_color.repository.IProductRepository;
import vn.codegym.su_dung_adobe_color.service.IProductService;


@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public Page<Product> getAll(String key_search, String productCodeId, Pageable pageable) {
        return iProductRepository.searchProduct(key_search,productCodeId,pageable);
    }

    @Override
    public Product findId(Long id) {
        return iProductRepository.findById(id).get();
    }

    @Override
    public void edit(Product product) {
        iProductRepository.save(product);
    }

    @Override
    public void add(Product product) {
        iProductRepository.save(product);
    }

    @Override
    public void delete(Long id) {
        iProductRepository.deleteById(id);
    }
}
