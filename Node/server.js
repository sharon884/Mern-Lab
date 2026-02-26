const { rejects } = require("assert");
const { error } = require("console");
const express = require("express");
const app = express();
const fs = require('fs');
const { resolve } = require("path");

app.get("/",( req, res ) => { 
    return res.send("hai from express server");
});




// app.get("/read", ( req, res ) => {
//      const read = new Promise(( resolve, reject ) => {
          
//            fs.readFile("file.text", "utf8" ,( error, data ) => {
//              if ( error  ) {
//                  reject(error);
//              }else {
//                 resolve( data);
//              }
//            })
//      });

//      read();
// })




app.get("/read", ( req, res ) => {
     fs.readFile("file.text","utf8", ( error , data ) => {
          if ( error ) {
             console.log( error);
          }else {
            console.log(data);
          }
     })
});

app.get("/write", ( req, res ) => {
     fs.writeFile("file.text","hai ny name is sharon", ( error , data) => {
         if ( error) {
             console.log(error);
         }else {
             console.log("success");
         }
     })
})

app.get("/delete", ( req, res) => {
      fs.unlink("file.text",( error , sucess) => {
          if ( error) {
             console.log(error);
          }else {
             console.log("success")
          }
      })
});


app.listen(5000, ( req, res ) => { 
    console.log(`server listening on port http://localhost:5000`);
})