package vn.codegym.su_dung_adobe_color.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import vn.codegym.su_dung_adobe_color.dto.ProductDto;
import vn.codegym.su_dung_adobe_color.model.Product;
import vn.codegym.su_dung_adobe_color.service.IProductCodeService;
import vn.codegym.su_dung_adobe_color.service.IProductService;

@Controller
@RequestMapping("product")
public class ProductController {
    @Autowired
    private IProductService iProductService;
    @Autowired
    private IProductCodeService iProductCodeService;
    @GetMapping("productList")
    public  String getHome(Model model, @PageableDefault(value = 2) Pageable pageable,
                           @RequestParam(defaultValue = "") String key_search,
                           @RequestParam(defaultValue = "") String productCodeId){
        model.addAttribute("productList",iProductService.getAll(key_search,productCodeId,pageable));
        model.addAttribute("productCodeList",iProductCodeService.getAll());
        return "home";
    }
    @GetMapping("{id}/editShow")
    public String editShow(@PathVariable Long id, @ModelAttribute ProductDto productDto, Model model){
        model.addAttribute("productDto",iProductService.findId(id));
        model.addAttribute("productCodeList",iProductCodeService.getAll());
        return "edit";
    }
    @PostMapping("edit")
    public String editProduct(@Validated @ModelAttribute ProductDto productDto,
                              BindingResult bindingResult,
                              RedirectAttributes redirectAttributes,
                              Model model){
        if(bindingResult.hasFieldErrors()){
            model.addAttribute("productCodeList",iProductCodeService.getAll());
            return "edit";
        }else{
            Product product = new Product();
            BeanUtils.copyProperties(productDto,product);
            iProductService.edit(product);
            redirectAttributes.addFlashAttribute("mesage","edit product complete");
            return "redirect:/product/productList";

        }

    }
    @GetMapping("addShow")
    public String addShow(Model model, @ModelAttribute ProductDto productDto){
        model.addAttribute("productDto",new ProductDto());
        model.addAttribute("productCodeList",iProductCodeService.getAll());
        return "addNew";
    }
    @PostMapping("addProduct")
    public String add(@Validated @ModelAttribute ProductDto productDto,
                      BindingResult bindingResult,
                      RedirectAttributes redirectAttributes,
                      Model model){
        if(bindingResult.hasFieldErrors()){
            model.addAttribute("productCodeList",iProductCodeService.getAll());
            return "addNew";

        }else{
            Product product = new Product();
            BeanUtils.copyProperties(productDto,product);
            iProductService.add(product);
            redirectAttributes.addFlashAttribute("message","add product complete");
            return "redirect:/product/productList";
        }

    }
    @GetMapping("{id}/delete")
    public String delete(@PathVariable Long id,RedirectAttributes redirectAttributes){
        iProductService.delete(id);
        redirectAttributes.addFlashAttribute("message","delete product complete");
        return "redirect:/product/productList";
    }
}
