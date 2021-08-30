const express = require('express');

const app = express();

app.use('/templates', express.static('templates'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/query', (req, res) => {
    res.send(req.query)
})

app.listen(3000, () => {
    console.log('Listening at localhost:3000');
})
