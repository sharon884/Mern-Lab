const express = require("express");
const app = express();


// app.use((req,res,next) => {
//      console.log(req.method);
//      if ( req.method =="Get" ) {
//         return res.send("blocked")
//      }else {
//         next();
//      }
//     //  next();
// });


app.get("/",( req, res ) => {
     return res.send("server is on ")
});




app.listen(5000, (req,res)=> {
    console.log("server listening on port http://localhost:5000")
})