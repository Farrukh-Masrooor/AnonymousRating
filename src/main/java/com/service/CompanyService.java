package com.service;


import com.beans.Company;
import com.repository.CompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepo companyRepo;

    public List<Company> getAllCompaniesByCategory(String name) {
        List<Company> list = new ArrayList<>();
        companyRepo.findByCategoryCategory(name).forEach(c -> list.add(c));
        return list;
    }

    public void addCompany(Company company) {
        companyRepo.save(company);
    }

//    public Company getCompanyByName(String name) {
//        return companyRepo.findByCompanyName(name);
//    }

    public Optional<Company> getCompanyById(int id) {
        return companyRepo.findById(id);
    }

    public List<Company> getAllCompanies( ) {
        List<Company> list = new ArrayList<>();
        companyRepo.findAll().forEach(c -> list.add(c));
        return list;
    }
}
