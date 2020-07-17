var express = require('express');
var router = express.Router();

const { requiresLogin, requiresAdmins } = require("../servies/authenticationServies")
const { createProduct, getProduct,getAllProduct } = require("../controlles/productController")

router.route("/product")
    .post(requiresLogin, requiresAdmins, createProduct)
    .get(getAllProduct)


router.route("/product/:categoryID")
    .get(getProduct)

module.exports = router;