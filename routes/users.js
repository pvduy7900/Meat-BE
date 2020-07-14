var express = require('express');
var router = express.Router();
const { getUserList, createUser,login,logout, updateUser } = require("../controlles/userController")


router.route("/uses")
    .get(getUserList)
    .post(createUser)

router.route("/auth/login")
    .post(login)


router.route("/auth/logout")
    .post(logout)

router.route("/users/me")
    .put(updateUser)


module.exports = router;
