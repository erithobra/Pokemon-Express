const express = require('express');
const methodOverride = require('method-override');

const app = express();

const pokemon = require('./models/pokemon')
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('/pokemon', routes.pokemon);

app.listen(3000, () => {
    console.log('I am listening on port 3000')
})