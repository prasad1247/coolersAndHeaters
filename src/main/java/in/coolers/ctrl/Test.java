/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package in.coolers.ctrl;

/**
 *
 * @author Priyanka
 */
public class Test {


//    public static void main(String[] args) {
//        String xml="=<h1 style=\"text-align: center;\">Best Air Conditioners in India Mar 2017</h1>" +
//"<p>Its so HOT in India right now and every one wants some cooling down</p>";
//        System.out.println(getTagValue(xml, "h1"));
//    }
//    
    public static String getTagValue(String xml, String tagName){
    return xml.split(">")[1].split("</"+tagName+">")[0];
}
    
}
