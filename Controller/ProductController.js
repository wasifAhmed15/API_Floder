const Sendresponse = require("../Helper/Helper")

const AllProduct = require("../Model/MongoModel.js") 

const Products =[
    {
        productname: "T-shirt",
        productimage: "Image",
        productprice: 29.99,
        id:1
      },
      {
        productname: "T-shirt",
        productimage: "Image",
        productprice: 19.99,
        id:2
      },
      {
        productname: "T-shirt",
        productimage: "Image",
        productprice: 49.99,
        id:3
      },
      {
        productname: "T-shirt",
        productimage: "Image",
        productprice: 39.99,
        id:4
      }
]
const ProductController ={
    get: async (req,res)=>{
      try{
        const Products =   await AllProduct.find({})
        res.status(200).send(Sendresponse(true,"Courses fetched successfully",Products))
      }

       catch (error) {
        res.status(500).send(Sendresponse(true,"Error in fetching courses"))
       }
    },


    getbyid:async (req,res)=>{
      try{
        let Productid = req.params.id
        const Products = await AllProduct.findById(Productid)
        res.status(200).send(Sendresponse(true,"",Products))

      }catch{
        res.status(400).send(Sendresponse(true,"No Data Found",null))
        
      }    
        
    },


    add: async(req,res)=>{
      let { productname, productimage,productprice}=req.body
      try{
  
       const newproduct = new AllProduct({productname, productimage,productprice})
       const  result = await newproduct.save();
       res.status(200).send(Sendresponse(true,"Successfully Add",result))

      }
      catch{
        res.status(400).send(Sendresponse(false,"Error in adding course",null))

      }

    },
    del: async (req,res)=>{
      try{
  let Productid = req.params.id
  const result = await AllProduct.findByIdAndDelete(Productid)
  res.status(200).send(Sendresponse(true,"Delete Successfully",result))


}
catch{
  res.status(400).send(Sendresponse(true,"Delete Successfully",null))

}

    },
    
    
}

module.exports=ProductController
