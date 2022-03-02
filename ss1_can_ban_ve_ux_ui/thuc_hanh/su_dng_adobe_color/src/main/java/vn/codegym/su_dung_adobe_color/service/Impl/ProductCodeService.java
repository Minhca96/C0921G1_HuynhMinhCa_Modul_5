package vn.codegym.su_dung_adobe_color.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.su_dung_adobe_color.model.ProductCode;
import vn.codegym.su_dung_adobe_color.repository.IProductCodeRepository;
import vn.codegym.su_dung_adobe_color.service.IProductCodeService;

import java.util.List;


@Service
public class ProductCodeService implements IProductCodeService {
    @Autowired
    private IProductCodeRepository iProductCodeRepository;

    @Override
    public List<ProductCode> getAll() {
        return iProductCodeRepository.findAll();
    }
}
