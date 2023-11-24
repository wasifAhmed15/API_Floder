const express = require ("express")
const Authroute = express.Router()
const AuthController = require("../Controller/AuthController")

Authroute.post("/signup",AuthController.sign)
Authroute.post("/login",AuthController.login)


module.exports=Authroute