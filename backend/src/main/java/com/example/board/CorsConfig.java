package com.example.board;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

//CORS정책때문에 진행한다 - Cross Origin 서로 다른 사이트 간에
//@Configuration: 서버 시작하자마자 실행
//              : 많은 파일에 @Configuration 붙일 수 있다.

@Configuration
public class CorsConfig {
    @Bean // 객체, 자바-커피콩, Bean 콩깍지
    // 필터 -> 서버로 오는 요청을 다 받으면 서버가 과중한 부담이 된다.
    // 필터를 붙여서 엑세스를 차단한다. 정당한 권한 있을 때만,
    // 원래는 ip 지정하고 특정 url로만 접근하게 해야 하는데
    // 현재는 누구나 접근가능하도록 해놓음
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOriginPattern("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");

        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}