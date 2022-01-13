const express = require("express");
const router = new express.Router();
const User = require("../models/User")
module.exports = router;

router.get("/signup", (req, res) => {
    res.render("signup");
  });

router.post("/signup", async (req, res, next) => {
    try {
        const newUser = { ...req.body};
        const foundUser = await User.findOne({ email : newUser.email });
        
        if (foundUser) {
            req.flash("warning", "Email already registered !");
            res.redirect("/auth/signup");
        } else {
            await User.create(newUser);
            req.flash("success", "Congrats ! You are now registered !");
            res.redirect("/auth/signin");
        }
    } catch (e) {
        next(e);
    }
});
  
router.get("/signin", (req, res) => {
    res.render("signin");
});

router.post("/signin", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({email : email});

        if (!foundUser) {
            req.flash("error", "Invalid email");
            res.redirect("/auth/signin");
        } else {
            if (password === foundUser.password) {
                const userObject = foundUser.toObject();
                delete userObject.password;
                req.session.currentUser = userObject;
                req.flash("success", "Successfully logged in !");
                res.redirect("/dashboard");
            }
        }
    } catch (e) {
        next(e);
    }
});
  
router.get("/logout", (req, res) => {
    req.session.destroy(function (err) {
        // cannot access session here anymore
        // console.log(req.session.currentUser);
        res.redirect("/auth/signin");
      });
});