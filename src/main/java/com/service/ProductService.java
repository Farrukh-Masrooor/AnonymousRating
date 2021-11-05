package com.service;

import com.beans.Product;
import com.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;


    public void addProduct(Product product){
        productRepo.save(product);
    }

    public void updateProductRating(Product product){
        productRepo.save(product);
    }

    public List<Product> getProducts(){
        List<Product> list= new ArrayList<>();
        productRepo.findAll().forEach(p->list.add(p));

        return list;
    }

    public Product getProduct(int productId) {
       return productRepo.findById(productId).get();
    }
}
