const Employe = require("../Model/EmployeModel.js");

const EmployeController = {
    get : async (req,res)=>{
try{
    const Employeobj = await Employe.find({})
    res.send({ message: 'Course added successfully', data:Employeobj  });
}
catch(error){
    res.send({ message: 'Course added successfully', });
}
    },

    
    
    post: async (req,res)=>{
        try{
            let {name,Email,Department,Adress}=req.body
            let obj = {name,Email,Department,Adress}
            let Errorsms = []
            if(!obj.name){
                Errorsms.push("Require Name")
            }
            if(!obj.Email){
                Errorsms.push("Require Email")
            }
            if(!obj.Department){
                Errorsms.push("Require Department")

            }
            if(!obj.Adress){
                Errorsms("Require Address")
            }
            if(Errorsms.length>0){
                res.bstatus("400").send({
                    isSuccessfull:false,
        massage : "Validation Error",
        data:null
                })
            }
            else{
                let employes = new Employe(obj)
                let result = await employes.save();
                res.send({ 
                    message: 'Course added successfully',
                 data: result });
            }


        }
        catch{
            res.send({ message: 'Course added successfully', data: result });
        }
    },
    getbyid: async (req,res)=>{
        try{
            let Employeid = req.params.id
            let employes = await Employe.findById(Employeid)
            res.status(200).send({
                isSuccessfull:true,
                data:employes
            })

        }
        catch{
            res.status(400).send({
                isSuccessfull:false,
                data:null,
                massage:"correct id"
            })
        }


    },

    del:async(req,res)=>{
        try{
            let Employeid = req.params.id
            let Delete = await Employe.findByIdAndDelete(Employeid)
            res.status(200).send({
                isSuccessfull:true,
                massage:"Delete",
                data:Delete
            })

        }
        catch{

            res.status(200).send({
                isSuccessfull:true,
                massage:"Correct Id ",
                data:null
            })

        }

    },
    edit:async (req,res)=>{
        try{

            let Employeid = req.params.id
            const updatedData = req.body;
            let Edit = await Employe.findByIdAndUpdate(Employeid,updatedData)
            res.status(200).send({
                isSuccessfull:true,
                massage:"Edit",
                data:Edit
            })
        }
        catch{
            res.status(400).send({
                isSuccessfull:true,
                massage:"E",
                data:null
            })
        }

    }
}

module.exports=EmployeController

