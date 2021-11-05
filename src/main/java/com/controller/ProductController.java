package com.controller;


import com.beans.Company;
import com.beans.Product;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.service.CompanyService;
import com.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private  ProductService productService;

    @Autowired
    private CompanyService companyService;

    @PostMapping(value = "/product",consumes = "application/json")
    public void addProduct(@RequestBody String data ){
        System.out.println("xbsbsbcs");
        ObjectMapper objectMapper= new ObjectMapper();
        Company company=null;
        try {
            JsonNode jsonNodeRoot = objectMapper.readTree(data);
            Product product=objectMapper.readValue(jsonNodeRoot.path("product").toString(),Product.class);

            int companID= jsonNodeRoot.get("company").asInt();
            company=companyService.getCompanyById(companID).get();
            if(company!=null){
                product.setCompany(company);
            }
//            else {
//                company= new Company();
//                company.setCompanyName(companyName);
//                company.setCategory(category);
//                companyService.addCompany(company);
//                product.setCompany(company);
//            }
            System.out.println("xbsbsbcs"+product.getProductName()+product.getNoOfUsersRated());
            productService.addProduct(product);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @GetMapping("/product")
    public List<Product> getProducts(){
        return productService.getProducts();
    }
    @PutMapping (value = "/product",consumes = "application/json")
    public void updateRating(@RequestBody String data){
        System.out.println(data);
        ObjectMapper objectMapper= new ObjectMapper();
        try {
            JsonNode jsonNodeRoot = objectMapper.readTree(data);
            Product product=objectMapper.readValue(data,Product.class);

            productService.updateProductRating(product);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

    }

}
