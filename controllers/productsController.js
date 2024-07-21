const Product = require("../models/products.model.js")

//To get available data from the db
async function handleGetAllProducts(req,res){
    try{
        const products = await Product.find({});
         return res.status(200).json(products);
    }
    catch(error){
        return res.status(500).json({message:message.error})
    }
}

//TO get Product using ID
async function handleGetProductsByID(req,res) {
    try {
        const {id} = req.params;
        const product = await Product.findById(id); 
        return res.status(200).json(product);
       }
       catch(error){
       return res.status(500).json({message:error.message})
       }
}

//To Update Products By ID
async function hanleUpdateProductByID(req,res){
    try{
        const { id } = req.params;
        console.log(id);
        const product = await Product.findByIdAndUpdate(id, req.body )

        if(!product){
           return res.status(404).json({message:"Product not found"})
        }
        const updatedProduct = await Product.findById(id)
        return res.status(200).json(updatedProduct);
    }
    catch(error){
       return res.status(500).json({message:error.message});
    }
}

// To add the data to the database
async function handleAddNewProduct(req,res){
    try{
        const product =  await Product.create(req.body)
        console.log(product)
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    handleGetAllProducts,
    handleGetProductsByID,
    hanleUpdateProductByID,
    handleAddNewProduct
}