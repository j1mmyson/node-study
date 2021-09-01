const express = require('express');
const routes = require('./routes');

const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routes);

app.listen(3000, () => {
    console.log("Connected to port 3000 .. .")
})