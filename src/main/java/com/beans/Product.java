package com.beans;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String productName;

    private double productRating;

   private String extraFeatures;

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @ManyToOne(cascade = CascadeType.PERSIST)
   private Company company;

    public int getNoOfUsersRated() {
        return noOfUsersRated;
    }

    public void setNoOfUsersRated(int noOfUsersRated) {
        this.noOfUsersRated = noOfUsersRated;
    }

    private int noOfUsersRated;

    public Product() {
    }

    public Product(int id, String productName, double productRating, String extraFeatures) {
        this.id = id;
        this.productName = productName;
        this.productRating = productRating;
        this.extraFeatures = extraFeatures;
    }

    public int getId() {
        return id;
    }

    public String getProductName() {
        return productName;
    }

    public double getProductRating() {
        return productRating;
    }

    public String getExtraFeatures() {
        return extraFeatures;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setProductRating(double productRating) {
        this.productRating = productRating;
    }

    public void setExtraFeatures(String extraFeatures) {
        this.extraFeatures = extraFeatures;
    }
}
