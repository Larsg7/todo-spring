package com.inheaden.test.todo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

// FIXME does not work with angular, you have to add @CrossOrigin to every controller
// Potential issue: Client has to set Access-Control-Request-Method
// source: https://stackoverflow.com/questions/37980914/spring-global-cors-configuration-not-working-but-controller-level-config-does
@Configuration
public class WebConfig extends WebMvcConfigurationSupport {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowCredentials(false).maxAge(3600);
    }
}
