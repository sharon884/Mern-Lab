const express = require("express");
const app = express();
const PORT = 5000;


app.get("/", ( req, res ) => {
    return res.send("hellow from express server");
});


app.listen(PORT,()=> {
    console.log(`server is lisenting on port http://localhost:${PORT}`);
});

