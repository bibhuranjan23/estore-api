const express = require('express');
const productCategories = require('./Routes/ProductCategories');
const produts = require('./Routes/Products');
const app = express();
const cors = require('cors');
const products = require('./Routes/Products');
app.use(cors());
app.use("/productCategories",productCategories);
app.use("/products",products);

const server = app.listen(5001,()=>{
    console.log("App is runnning on the port-5001");
});




