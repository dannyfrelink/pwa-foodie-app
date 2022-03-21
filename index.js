const express = require(`express`);
const app = express();
const port = 5555;

app.use(express.static(`static/public`));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.use((req, res) => {
    res.status(404).send(`Sorry, deze pagina kon ik niet vinden.`);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});