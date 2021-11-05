package com.repository;

import com.beans.Feature;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FeatureRepo  extends CrudRepository<Feature,Integer> {

    public List<Feature> findByProductId(int productId);
}
