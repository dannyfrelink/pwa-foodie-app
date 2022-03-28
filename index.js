const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 5555;

app.use(express.static('src'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/barcode', (req, res) => {
    res.render('barcode');
});

app.get('/product', async (req, res) => {
    await fetch(`https://world.openfoodfacts.org/api/v0/product/${req.query.query}.json`)
        .then(res => res.json())
        .then(data => {
            if (data.status == 1) {
                res.render('product', { product: data.product });
            }
            else {
                res.redirect('/barcode')
            }
        })
});

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});