package com.service;

import com.beans.Category;
import com.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    public void addCategory(Category category) {
        categoryRepo.save(category);
    }

    public List<Category> getAllCategories() {
        List<Category> list = new ArrayList<>();
        categoryRepo.findAll().forEach(c -> list.add(c));
        return list;
    }

    public Optional<Category> getCategory(int id){
        return  categoryRepo.findById(id);
    }
}
