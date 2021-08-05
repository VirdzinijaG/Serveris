// console.log("Hello world");

import { default as express } from "express"; // require eiluite pakeista i import 

const app = express(); // paleidziama funkcija is node_modules
const port = 3000;


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

// klauso 3000 port'o 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


// narsykle paleidziant rasoma localhost:3000/ ir yra atvaizduojama, kas yra siunciama is serverio