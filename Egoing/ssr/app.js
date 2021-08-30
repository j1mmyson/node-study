const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {title:"Index Page", message: "Hello Jade!"});
});

app.get("/post/new", (req, res) => {
    res.render('form');
})

app.post("/create", (req, res) => {
    res.send("POST /create\n" + req.body.title + req.body.description);
})

app.listen(3000, () => {
    console.log("Connected to port 3000 .. .")
})