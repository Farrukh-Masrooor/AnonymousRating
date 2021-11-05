package com.controller;

import com.beans.Category;
import com.beans.Company;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.service.CategoryService;
import com.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;


@RestController
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @Autowired
    private CategoryService categoryService;

    @PostMapping(path = "/company")
    public void addCompany(@RequestBody String data){
        ObjectMapper objectMapper= new ObjectMapper();
        Company company =new Company();

        try {
            JsonNode jsonNodeRoot = objectMapper.readTree(data);
             company.setCompanyName(jsonNodeRoot.path("companyName").asText());
             int id= jsonNodeRoot.path("category").asInt();
             Category category1=categoryService.getCategory(id).get();

             company.setCategory(category1);
             companyService.addCompany(company);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        companyService.addCompany(company);
    }

    @GetMapping(path = "/company")
    public List<Company> getCompiesByCategory(@RequestParam  String name){
       return companyService.getAllCompaniesByCategory(name);
    }

    @GetMapping(path = "/company/all")
    public List<Company> getAllCompies(){
        return companyService.getAllCompanies();
    }
}
