const Express = require("express")
const mongoose  = require("mongoose")
const Cors = require("cors")
require("dotenv").config()
const App = Express()
const route = require("./Router/RouterProduct")
const EmployeRoute = require("./Router/EmployeRoute")
const AuthRouter = require("./Router/AuthRouter")

App.use(Express.json())
App.use(Cors())
App.use("/Product",route)
App.use("/Employes",EmployeRoute)
App.use("/Auth",AuthRouter)


mongoose.connect(process.env.MONGO_URL)
.then((res)=>{
  App.listen(process.env.PORT,()=>{
    console.log("database is connect with Product Api")
  })
}).catch((err)=>{
  console.log(`err${err}`)
})



