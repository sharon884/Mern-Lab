const express = require("express");
const app = express();


 const orderItems = [
    {
      id: 1,
      user: 'Rahul',
      items: [
        { name: 'Laptop', qty: 1, price: 50000 },
        { name: 'Mouse', qty: 1, price: 700 },
      ],
    },
    {
      id: 2,
      user: 'Vijay',
      items: [
        { name: 'Phone', qty: 1, price: 20000 },
        { name: 'Case', qty: 2, price: 200 },
      ],
    },
    {
      id: 3,
      user: 'Meera',
      items: [
        { name: 'Tablet', qty: 1, price: 15000 },
        { name: 'Cover', qty: 1, price: 500 },
      ],
    },
    {
      id: 4,
      user: 'Anita',
      items: [
        { name: 'Headphones', qty: 1, price: 3000 },
        { name: 'Charger', qty: 1, price: 800 },
      ],
    },
    { id: 5, user: 'Karan', items: null },
  ]


   

app.get("/send/:id", ( req, res) => {
        let id = Number(req.params.id);
        for ( let order of orderItems ) {
          if ( id == order.id) {
             return res.send(order);
          }else {
             return res.status(404).send("not found")
          }
   };


     
})


app.listen(5000,( req, res) => {
     console.log("server listening on port http://localhost:5000");
});