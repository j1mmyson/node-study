const fs = require('fs');


exports.index = function(req, res) {
    res.render('index', {title: "Index Page", message: "Hello MVC!"});
};

exports.showAllList = function(req, res) {
    fs.readdir('data', (err, files) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error!');
        }
        res.render('list', {topics:files});
    })
};

exports.getList = function(req, res) {
    const id = req.params.id;
    fs.readdir('data', (err, files) => {
        fs.readFile('data/'+id, 'utf8', (err, data) => {
            if(err){
                console.log(err);
                res.status(500).send('Internal Server Error');
            }
            res.render('file', {topics: files, title: id, description: data})
        })
    });
};

exports.renderForm = function(req, res) {
    res.render('form');
};

exports.write = function(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    fs.writeFile('data/'+title + '.txt', description, (err) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.send('Success!');
    });
};