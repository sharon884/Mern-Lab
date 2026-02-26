const express = require("express");
const app = express();


// app.use((req,res,next) => {
//      console.log(req.method);
//      if ( req.method =="GET" ) {
//         return res.send("blocked")
//      }else {
//         next();
//      }
   
// });


app.get("/",( req, res ) => {
     return res.send("server is on ")
});

app.get("/sum/:num1", ( req, res ) => {
     let num1 = req.params.num1;
     let num2 = req.query.num2;
     let sum = Number(num1) + Number(num2);
     return res.send(sum);
});



app.listen(5000, (req,res)=> {
    console.log("server listening on port http://localhost:5000")
})