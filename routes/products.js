const express = require("express")
const routes = express.Router()
const {handleGetAllProducts,
    handleGetProductsByID,
    hanleUpdateProductByID,
    handleAddNewProduct} = require("../controllers/productsController.js");

routes.route("/")   
      .get(handleGetAllProducts)
      .post(handleAddNewProduct)

routes.route("/:id")
      .get(handleGetProductsByID)
      .put(hanleUpdateProductByID)

module.exports = routes
