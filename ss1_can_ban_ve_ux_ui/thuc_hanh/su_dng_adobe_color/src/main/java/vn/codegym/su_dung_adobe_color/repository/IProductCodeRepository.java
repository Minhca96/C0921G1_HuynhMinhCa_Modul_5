package vn.codegym.su_dung_adobe_color.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.codegym.su_dung_adobe_color.model.ProductCode;


@Repository
public interface IProductCodeRepository extends JpaRepository<ProductCode, Long> {
}
