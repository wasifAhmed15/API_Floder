const express = require("express")
const ProductController = require("../Controller/ProductController")
const route = express.Router()

route.get("/",ProductController.get)
route.get("/:id",ProductController.getbyid)
route.post("/",ProductController.add)
route.delete("/:id",ProductController.del)

module.exports=route