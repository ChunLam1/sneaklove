const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)

module.exports = router;

router.get("/", (req, res) => {
    res.render("products_manage");
})