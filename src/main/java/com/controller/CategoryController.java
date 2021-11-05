package com.controller;


import com.beans.Category;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping(path = "/category",consumes = "application/json")
    public void addCategory(@RequestBody String data){
        ObjectMapper objectMapper= new ObjectMapper();
        try {
            Category category= objectMapper.readValue(data,Category.class);
            categoryService.addCategory(category);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }

    @GetMapping(path = "/category")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }
}
