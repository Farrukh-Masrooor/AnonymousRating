package com.beans;

import javax.persistence.*;

@Entity
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String companyName;

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Category category;

    public Company(int id, String companyName) {
        this.id = id;
        this.companyName = companyName;
    }

    public Company() {
    }



    public void setId(int id) {
        this.id = id;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public int getId() {
        return id;
    }

    public String getCompanyName() {
        return companyName;
    }
}
