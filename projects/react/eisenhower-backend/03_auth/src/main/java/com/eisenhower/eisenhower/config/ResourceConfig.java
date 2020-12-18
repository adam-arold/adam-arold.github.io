package com.eisenhower.eisenhower.config;

import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.EncodedResourceResolver;

@SuppressWarnings("unused")
@Configuration
class ResourceConfig implements WebMvcConfigurer {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private Environment environment;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        if (environment.acceptsProfiles(Profiles.of("development"))) {
            logger.info("Running in development mode.");
            String userDir = System.getProperty("user.dir");
            String workingDir = Paths.get(userDir, "app/dist").toUri().toString();
            logger.info("Working directory is: " + workingDir);
            registry.addResourceHandler("/**")
                    .addResourceLocations(workingDir)
                    .setCachePeriod(0);
        } else {
            logger.info("Running in production mode.");
            registry.addResourceHandler("/", "/index.html")
                    .addResourceLocations("classpath:/static/")
                    .setCacheControl(CacheControl.noCache()).resourceChain(false)
                    .addResolver(new EncodedResourceResolver());

            registry.addResourceHandler("/**").addResourceLocations("classpath:/static/")
                    .setCacheControl(CacheControl.maxAge(365, TimeUnit.DAYS).cachePublic())
                    .resourceChain(false).addResolver(new EncodedResourceResolver());
        }
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index.html");
    }

}
