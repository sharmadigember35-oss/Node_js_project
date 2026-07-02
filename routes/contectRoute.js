 const express = require('express');
 const app = express();
 const {getContect,postContect,putContect,deleteContect} = require('../Controllers/contecControler')
 const router = express.Router();
 
 router.route("/").get(getContect)

router.route("/a").get((req,res)=>{
    res.status(200).json({message:"we llearn it how to get data "})
})

router.route("/").post(postContect)
router.route("/").put(putContect)
router.route("/").delete(deleteContect)// this is onnly for learning perpuse
// what is router.rout
module.exports = router;