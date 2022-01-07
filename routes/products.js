const express = require("express");

const router = express.Router();

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

router.get("/products", (req, res) => {
  res.json(products);
});

module.exports = router;
