const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const SneakerModel = require("../models/Sneaker");
const TagModel = require("../models/Tag");
const uploader = require("./../config/cloudinary");
const protectPrivateRoute = require("../middlewares/protectPrivateRoute")

router.get("/", protectPrivateRoute, (req, res) => {
    SneakerModel
        .find()
        .then((sneakers => {
            res.render("products_manage", { sneakers });
        }))
        .catch(err => console.error(err))
})

router.get("/prod-add", protectPrivateRoute, (req, res) => {
    TagModel
        .find()
        .then((tags => {
            res.render("products_add", { tags });
        }))
        .catch(err => console.error(err))
})

router.post("/prod-add", protectPrivateRoute, async (req, res, next) => {
    try {
        await SneakerModel.create(req.body);
        res.redirect("/dashboard");
    } catch (e) {
        next(e);
    }
})

router.get("/prod-manage", protectPrivateRoute, (req, res) => {
    SneakerModel
        .find()
        .then((sneakers => {
            res.render("products_manage", { sneakers });
        }))
        .catch(err => console.error(err))
})

router.post("/delete/:id", protectPrivateRoute, (req, res) => {
    SneakerModel
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/dashboard")
        })
        .catch(e => console.error(e))
})

module.exports = router;