const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const SneakerModel = require("../models/Sneaker");
const TagModel = require("../models/Tag");
const uploader = require("./../config/cloudinary");
module.exports = router;

router.get("/", (req, res) => {
    res.render("products_manage");
})

router.get("/prod-add", (req, res) => {
    res.render("products_add");
})

router.post("/prod-add", async (req, res, next) => {
    try {
        await SneakerModel.create(req.body);
        res.redirect("/dashboard");
    } catch (e) {
        next(e);
    }
})

router.get("/prod-manage", (req, res) => {
    res.render("products_manage");
})