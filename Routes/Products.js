const express = require('express');
const products = express.Router();
const mysql = require('mysql2');

const pool = mysql.createPool(
    {
        host:"localhost",
        user:"root",
        password:"csmpl@123",
        database :"estore",
        port:3306,
        multipleStatements:true
    }
);

products.get("/",(req,res)=>{
  
    let productData;
    
    pool.query("Select * from products",(error,products)=>{
        if(error){
            productData = error;
            res.status(500).send(productData);
            }else{
                productData = products;
                res.status(200).send(productData);
            }                   
    })
});




module.exports = products ;

