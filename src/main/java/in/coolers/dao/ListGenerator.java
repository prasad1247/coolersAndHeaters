/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package in.coolers.dao;

import in.coolers.beans.ProductBean;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Asus
 */
@Repository
public class ListGenerator {

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public NamedParameterJdbcTemplate getTemplate() {
        if (namedParameterJdbcTemplate == null) {
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setSchema("smart_compare");
            dataSource.setUsername("root");
            dataSource.setPassword("root");
            dataSource.setUrl("jdbc:mysql://localhost:3306/smart_compare");
//            dataSource.setPassword("rose@123");
//            dataSource.setURL("jdbc:mysql://52.42.111.208:3033/smart_compare");

            namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        }
        return namedParameterJdbcTemplate;
    }

    public List postData(HashMap inputMap) {
        StringBuilder sql = new StringBuilder();
        List catList = null;
        
        try {
            sql.append(" insert into blog_details(postdesc,url,author) values(:desc,:url,:author )");

            namedParameterJdbcTemplate = getTemplate();
            namedParameterJdbcTemplate.update(sql.toString(), inputMap);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {

        }
        return catList;

    }

}
