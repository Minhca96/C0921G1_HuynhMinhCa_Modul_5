package vn.codegym.su_dung_adobe_color.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.codegym.su_dung_adobe_color.model.Product;


@Repository
public interface IProductRepository extends JpaRepository<Product,Long> {
    @Query(value="SELECT * FROM product where name like concat('%',:keySearch,'%') " +
            "and product_code_id_id like concat('%',:productCodeId,'%')",
            nativeQuery=true)
    Page<Product> searchProduct(@Param("keySearch") String keySearch,
                                @Param("productCodeId") String serviceTypeId,
                                Pageable pagle);

}
