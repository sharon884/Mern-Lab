const express = require("express");
const app = express();
const fs = require('fs')

app.get("/",( req, res ) => { 
    return res.send("hai from express server");
});




app.get("/read", ( req, res ) => {
     fs.readFile("file.text", "utf8", (err, data) => {
         if ( err ) {
            console.log(err);
            return ;
         }else {
             console.log(data);
             return ;
         }
     })
})



app.listen(5000, ( req, res ) => { 
    console.log(`server listening on port http://localhost:5000`);
})