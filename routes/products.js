const express = require("express");
const router = express.Router();

const axios = require("axios");

const ProductsURL = "https://fakestoreapi.com/products";

const products = [
  {
    id: Math.random(),
    title: "product 1",
  },
  {
    id: Math.random(),
    title: "product 2",
  },
  {
    id: Math.random(),
    title: "product 3",
  },
];

// @route GET api/products
// @desc  get the Products
// @access Public

router.get("/products", async (req, res) => {
  try {
    const productsList = await axios.get(ProductsURL);
    res.json(productsList.data);
  } catch (error) {
    console.log("🚀 ~ file: products.js ~ line 32 ~ router.get ~ error", error);
    res.status(400);
  }
});

module.exports = router;
