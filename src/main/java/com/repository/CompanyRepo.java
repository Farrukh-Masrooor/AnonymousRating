package com.repository;

import com.beans.Company;
import jdk.nashorn.internal.runtime.regexp.joni.ast.StringNode;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CompanyRepo extends CrudRepository<Company,Integer> {



    public List<Company> findByCategoryCategory(String name);
}
