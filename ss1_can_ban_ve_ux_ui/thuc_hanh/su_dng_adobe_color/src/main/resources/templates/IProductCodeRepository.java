package vn.codegym.thi_thu_module_4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.codegym.thi_thu_module_4.model.ProductCode;

@Repository
public interface IProductCodeRepository extends JpaRepository<ProductCode, Long> {
}
