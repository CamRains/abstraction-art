const express = require('express');
const bodyParser = require('body-parser');
const artCont = require('./art_controller');
const path = require('path')

const app = express();
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`))

app.get('/api/art', artCont.getArt);
app.post('/api/art', artCont.createArt);
app.put('/api/art/:id', artCont.editArt);
app.delete('/api/art/:id', artCont.deleteArt);
app.put('/api/bid/:id', artCont.bidEdit);

app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, '../build/index.html'))})

const port =  3005;
app.listen(port, () => {
    console.log(`Youre surfin on the dopest port around (${port})🤙`)
});

// "start": "react-scripts start",

// "start": "serve",