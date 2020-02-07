package com.elgris.usersapi;

import com.elgris.usersapi.security.JwtAuthenticationFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import co.elastic.apm.attach.ElasticApmAttacher;


@SpringBootApplication
public class UsersApiApplication {

	public static void main(String[] args) {
                ElasticApmAttacher.attach();
		SpringApplication.run(UsersApiApplication.class, args);
	}
}
