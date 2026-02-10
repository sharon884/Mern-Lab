import express from "express"
const app = express();


app.use((req, res, next ) => {
    console.log(req.method);
    next();
});


app.get("/", ( req, res) => {
    res.send("hai from express server");
});


app.get("/add/:num1", ( req, res ) => {
    let a = req.params.num1
    let b = req.query.num2;
    let c = Number(a) + Number(b);

    res.send("sum :" + c);
});


app.get("/error",( req, res, next ) => {

     const err = new Error("something went wrong");
     next(err);
});



app.use(( error, req, res, next ) => {
    console.log(error);
    return res.status(500).send(error);
});


app.listen(3000,( req,res ) => {
    console.log(`server is listening on port http://localhost:${3000}`)
});