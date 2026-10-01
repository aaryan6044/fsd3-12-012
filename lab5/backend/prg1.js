import express from 'express';

const app = express();

app.get("/", (req, res) => {
    // res.send("Hello Express");
    res.send(`
        <h1>Hello Server</h1>
        <h2>I am responding from express framework</h2>
        `)
});


app.get("/about", (req,res) => {
    res,send("<h2>About page</h2>");
});


app.get("/peoducts", (req,res) => {
    const product ={
        id:1,
        name: "Mobile",
        price: 25000,
    };
    res.send(product);
});



app.listen(4444, ()=>console.log('prg1 is running at 4444'));