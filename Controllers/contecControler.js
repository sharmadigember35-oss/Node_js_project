// in controller we pass the write all the logice for request and res and that are connect to database

// when ever we crat a api method me need to give some lables methods 
// disciption for get all contect 
// route get  / api / contects
// acces public  later one we chage to prive 
const asyncHandler = require("express-async-handler")

const getContect = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"ger all data we need"});
})// now we don't need to handle throw try catch block
const postContect = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"here we put data "})
})
const putContect = asyncHandler(async(req,res)=>{
    console.log("the request boady is :",req.body) 
      const {name,email,phone} = req.body;
      if(!name || !email || ! phone){
        res.status(400);
       throw new Error("all fiels are mandotary")// but this error in html format i want this in json formate think 
      }
    // this will give undifine because when ever we want to data from client to boady parse wer require boady parser 
    res.status(200).json({message:`we hear how to put`})
})
const deleteContect = asyncHandler(async(req,res)=>{
    res.status(200).json({message: "how we delete the data "})

})
// when we have asyne we have to resolve error using try and catch block but by using module express error handlore 
// we not to use 
module.exports={getContect,postContect,putContect,deleteContect}