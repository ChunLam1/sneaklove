const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/products", (req, res) => {
  res.render("products");
});

router.get("/sneakers/:cat", (req, res) => {
  res.render("one_product");
});

router.get("/one-product/:id", (req, res) => {
  res.render("one_product");
});

module.exports = router;
