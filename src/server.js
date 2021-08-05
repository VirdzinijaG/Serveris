// console.log("Hello world");

import { default as express } from "express"; // require eiluite pakeista i import 

const app = express(); // paleidziama funkcija is node_modules
const port = 3000;

app.use(express.static("web")); // tikrina ar web direktorijoje yra failai, pats automatiskai perskaito

app.get("/suma", (req, res) => {
    const sk1 = parseFloat(req.query.pirmas);
    const sk2 = parseFloat(req.query.antras);
    res.send(sk1 + sk2 + "");
});
// skaiciu reiksmes nurodomos narsykles adreso laukelyje
// localhost:3000/suma?pirmas=5&antras=48 // 5 ir 48 galima keisti

// atejus uzklausai get i / suveiks sita funkcija
app.get('/', (req, res) => {
    res.send('Hello World!') // israsoma narsykleje 
});

// atejus uzklausai get i /labas suveiks sita funkcija
app.get('/labas', (req, res) => {
    res.send('Labas pasauli') // israsoma narsykleje 
});

// atejus uzklausai get i /labas/siandien suveiks sita funkcija
app.get('/labas/siandien', (req, res) => {
    res.send('Labas pasauli, siandien ketvirtadienis!') // israsoma narsykleje 
});

// atejus uzklausai get i /viso suveiks sita funkcija, su html
app.get('/viso', (req, res) => {
    res.send('<html><body><h1>Viso geriausio!</h1></body></html>') // israsoma narsykleje 
});

app.get("/style", (req, res) => {
    res.send('<html><body style="background-color:aqua;"><p style="color:red;">I am red</p></body></html>');
});
// klauso 3000 port'o 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


// narsykle paleidziant rasoma localhost:3000/ ir yra atvaizduojama, kas yra siunciama is serverio