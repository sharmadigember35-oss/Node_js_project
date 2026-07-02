const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT;
 
// for clean implement we requied a folder that create a route
/*app.get('/api/contect',(req,res)=>{
    res.status(200).json({message:"ger all data we need"});
})*/
// now i creat a route instead of using this we can use middleware 
// i want for everapi i want to /api/contect as common api url so we use this 
 // recvie data from client to server side
 app.use(express.json());
app.use('/api/contect',require("./routes/contectRoute"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`process is running on port ${port}`);
});
 

