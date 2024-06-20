const express = require('express');
const productCategories = express.Router();
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

productCategories.get("/",(req,res)=>{
  
    let categoriyData;
    
    pool.query("Select * from categories",(error,categories)=>{
        if(error){
            categoriyData = error;
            res.status(500).send(categoriyData);
            }else{
                categoriyData = categories;
                res.status(200).send(categoriyData);
            }                   
    })
});




module.exports =  productCategories;

