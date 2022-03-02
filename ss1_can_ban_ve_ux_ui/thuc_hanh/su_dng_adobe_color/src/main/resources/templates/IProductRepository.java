package vn.codegym.thi_thu_module_4.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.codegym.thi_thu_module_4.model.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product,Long> {
    @Query(value="SELECT * FROM product where name like concat('%',:keySearch,'%') " +
            "and product_code_id like concat('%',:productCodeId,'%')" +
            "and serviceType_id_id like concat('%',:serviceTypeId,'%')",
            nativeQuery=true)
    Page<Product> searchService(@Param("keySearch") String keySearch,
                                  @Param("productCodeId") String productCodeId,
                                  @Param("serviceTypeId") String serviceTypeId,
                                  Pageable pagle);
}
