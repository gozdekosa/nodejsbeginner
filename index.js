const express = require('express');
const app = express();

app.set("view engine", "ejs"); // Set the view engine to EJS

app.use(express.static('public'));

const data = [
    { id: 1, name: "Urun 1", price: 100, image: "test.jpg" },
    { id: 2, name: "Urun 2", price: 200, image: 'test.jpg' },
    { id: 3, name: "Urun 3", price: 300, image: 'test.jpg'}
];

//root middleware
app.use('/products/:id', function(req, res) {
    const urun = data.find(p => p.id == req.params.id);

    res.render("product-detail", urun);
});

app.use('/products', function(req, res) {
    res.render("products", {
        products: data
    });
});

app.use('/', function(req, res) {
    res.render("index");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});