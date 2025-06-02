const express = require('express');
const router = express.Router();

const db = require('../data/db'); // Assuming you have a db.js file for MySQL connection

router.use('/products/:id', async function(req, res) {
     try{
        const [products] = await db.execute("SELECT * FROM products where id=?", [req.params.id]);
        res.render("product-details", {
            urun: products[0] // Assuming the first element of the result is the rows
        });

    } catch(err) {
        console.log(err);
    }
});

router.use('/products', function(req, res) {
    res.render("products", {
        products: data
    });
});

router.use('/', async function(req, res) {

    try{
        const [products] = await db.execute(1`SELECT * FROM products`);
        res.render("index", {
            products: products[0] // Assuming the first element of the result is the rows
        });

    } catch(err) {
        console.log(err);
    }

/*     db.execute(1`SELECT * FROM products`)
        .then(result => {
            console.log(result[0]);

            res.render("index", {
                products: result[0] // Assuming the first element of the result is the rows
            });

        })
        .catch(err =>console.log(err)); */
});

module.exports = router;