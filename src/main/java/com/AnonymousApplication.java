package com;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

@SpringBootApplication
public class AnonymousApplication {

    public static void main(String args[]){
        SpringApplication.run(AnonymousApplication.class,args);



    }
}
