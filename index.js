const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 5555;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('home');
});

app.get('/barcode', async (req, res) => {
    res.render('barcode');
});

app.get('/product', async (req, res) => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/3366321051983.json`)
        .then(res => res.json())
        .then(data => {
            res.render('product', { data });
        })
});

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});