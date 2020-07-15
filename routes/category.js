var express = require('express');
var router = express.Router();


const { createCategory } = require("../controlles/categoryController")
const { requiresLogin, requiresAdmins } = require("../servies/authenticationServies")

router.route("/category")
    .post(requiresLogin, requiresAdmins, createCategory)


module.exports = router;
