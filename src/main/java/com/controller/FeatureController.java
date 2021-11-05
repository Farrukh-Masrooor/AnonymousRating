package com.controller;

import com.beans.Feature;
import com.beans.Product;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.service.FeatureService;
import com.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RestController
public class FeatureController {

    @Autowired
    private FeatureService featureService;

    @Autowired
    private ProductService productService;

    @PostMapping(path = "/features",consumes = "application/json")
    public void addFeatures(@RequestBody String data){
        List<Feature> list=getFeaturesFromJson(data);
        featureService.addFeatures(list);
    }

    @GetMapping(path = "/features")
    public List<Feature> getFeaturesByProduct(@RequestParam int productId){
        List<Feature> list= featureService.getFeaturesByProduct(productId);
        return list;
    }


    private List<Feature> getFeaturesFromJson(String data){

        List<Feature> featureList= new ArrayList<>();

        ObjectMapper objectMapper= new ObjectMapper();
        try {
            JsonNode jsonNodeRoot = objectMapper.readTree(data);
            int productId= jsonNodeRoot.get("productId").asInt();
            Product  product= productService.getProduct(productId);
            if(jsonNodeRoot.path("featureName").isArray()){
             Iterator<JsonNode> i= jsonNodeRoot.path("featureName").elements();
             Iterator<JsonNode> i2= jsonNodeRoot.path("rating").elements();
                Iterator<JsonNode> i3= jsonNodeRoot.path("id").elements();
             while (i.hasNext() && i2.hasNext()){
                 Feature feature= new Feature();
                 feature.setFeatureName(i.next().asText());
                 feature.setRating(i2.next().asInt());
                 feature.setProduct(product);
                 feature.setId(i3.next().asInt());
                 featureList.add(feature);
             }
            }
            else {
                Feature feature= new Feature();
                feature.setFeatureName(jsonNodeRoot.path("featureName").asText());
                feature.setRating(jsonNodeRoot.path("rating").asInt());
                if(jsonNodeRoot.path("id").asInt()!=0)
                    feature.setId(jsonNodeRoot.path("id").asInt());
                feature.setProduct(product);
                featureList.add(feature);
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return featureList;
    }
}
