var express = require('express');
var router = express.Router();


const { createCategory, getCategory } = require("../controlles/categoryController")
const { requiresLogin, requiresAdmins } = require("../servies/authenticationServies")

router.route("/category")
    .get(getCategory)
    .post(requiresLogin, requiresAdmins, createCategory)


module.exports = router;
