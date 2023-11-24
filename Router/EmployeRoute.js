const Express =  require("express")
const EmployeController = require("../Controller/Employecontroller")
const EmployRoute = Express.Router()

EmployRoute.get("/",EmployeController.get)
EmployRoute.post("/",EmployeController.post)
EmployRoute.get("/:id",EmployeController.getbyid)
EmployRoute.delete("/:id",EmployeController.del)
EmployRoute.put("/:id",EmployeController.edit)

module.exports=EmployRoute