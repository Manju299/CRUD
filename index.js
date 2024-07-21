const express = require('express')
const {connectionMongoDB} = require("./connection.js");

const Product = require('./models/products.model.js')
const productRoutes = require("./routes/products.js");
const app = express();


app.use(express.json());

app.use("/products", productRoutes)

connectionMongoDB();
app.listen(3000 ,()=>{
    console.log("Server is listening on on port 3000")
}) 
