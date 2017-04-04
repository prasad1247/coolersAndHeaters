/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package in.coolers.ctrl;

import in.coolers.dao.ListGenerator;
import java.util.Date;
import java.util.HashMap;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 *
 * @author Priyanka
 */
@RestController

public class MainController {

    
    @Autowired
    ListGenerator dao;
    
    @ModelAttribute
    public void setVaryResponseHeader(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
    }

//    @RequestMapping(value = "/")
//    public String getHome() {
//        return "Hello World";
//    }

    @RequestMapping(value = "/post")
    public HashMap postBlog(@RequestBody HashMap postData) {
       postData.put("date", new Date());
        postData.put("author","Prasad");
         System.out.println("post data  "+postData);
        dao.postData(postData);
        return postData;
    }

    @RequestMapping(value = "/hello")
    public HashMap getHello() {
        HashMap map = new HashMap();
        map.put("name", "prasad");
        map.put("surname", "ddddd");
        return map;
    }

}
