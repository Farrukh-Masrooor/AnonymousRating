package com.service;

import com.beans.Feature;
import com.repository.FeatureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FeatureService {

    @Autowired
    private FeatureRepo featureRepo;

    public void addFeature(Feature feature){
        featureRepo.save(feature);
    }

    public void addFeatures(List<Feature> feature){
        featureRepo.saveAll(feature);
    }

    public List<Feature> getFeaturesByProduct(int productId){
        List<Feature> featureList= new ArrayList<>();
        featureRepo.findByProductId(productId).forEach(f -> featureList.add(f));

        return featureList;
    }
}
