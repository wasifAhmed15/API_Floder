const Authmodel = require("../Model/AuthModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const SendResponse=require("../Helper/Helper")

const AuthController = {
    sign: async (req, res) => {
        try {
            let { Email, Password } = req.body
            let obj = { Email, Password }
            let Err = []
            if (!obj.Email) {
                Err.push("Require Email")
            }

            if (!obj.Password) {
                Err.push("Require Password")
            }

            if (Err.length > 0) {
                res.status(400).send({
                    isSuccessfull: false,
                    massage: "Validation Error",
                    data: null
                });

            }

            //   let UserExist = await Authmodel.findOne({Email:obj.Email})
            let UserExist = await Authmodel.findOne({ Email: obj.Email })

            if (UserExist) {
                res.status(400).send({
                    isSuccessfull: false,
                    massage: "User Already Exist",
                   
                })
                return;
            }

            obj.Password = await bcryptjs.hash(obj.Password, 10)
            let User = new Authmodel(obj)
            let result = await User.save();
            if (result) {
                res.status(200).send({
                    isSuccessfull: true,
                    massage: "user create",
                    data: result
                })

            }


        }
        catch {

            res.status(400).send({
                isSuccessfull: false,
                massage: "user Not create",
                
            })

            return;

        }


    },

    login: async (req,res) => {      


        try{
          let {Email,Password}=req.body
          let obj = {Email,Password}
          let ExitingUser =  await Authmodel.findOne({Email:obj.Email})
          if(ExitingUser){
            let corerctPassword = await bcryptjs.compare(
              obj.Password,
              ExitingUser.Password
            )

            if(corerctPassword){
              let token = jwt.sign({...ExitingUser},process.env.SECRET_KEY)
              res.send({
                isSuccessfull:true,
                massage:"Login successfuly",
                token:token,
                user:ExitingUser

              },
             
              
              )
            }

            else{
              res.send({
                isSuccessfull:false,
                massage:"Password Dont match"
              })
            }

          }


          else{
            res.send({
              isSuccessfull:false,
              massage:"User Not Found with this User Name"
            })
          }



          
 
          
        }
        catch(err){
          console.log(err)

        }
    }
   


}

module.exports = AuthController