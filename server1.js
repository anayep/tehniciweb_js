const express = require('express');
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;


var detalii = 
        [
            {
            id:2,
            descriere:"hamham",
            src:"https://pentruanimale.ro/blog/wp-content/uploads/2015/09/9.jpeg"
            },

        {
            id:3,
            descriere:"cutu",
            src:"https://pentruanimale.ro/blog/wp-content/uploads/2015/09/9.jpeg"
        }]
        



app.get('/post.html',function (req, res){

res.sendFile(__dirname + '/post.html');

});

app.get('/postari', (req, res) => {
    res.send(detalii);
});



app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + "/login.html");
});


app.get('/signup.html', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});


app.get('/public/css/general.css', (req, res) => {
    res.sendFile(__dirname + '/public/css/general.css');
});

app.get('/public/css/loginstyle.css', (req, res) => {
    res.sendFile(__dirname + '/public/css/loginstyle.css');
});

app.get('/public/css/errorstyle.css', (req, res) => {
    res.sendFile(__dirname + '/public/css/errorstyle.css');
});

app.get('/public/imagini/pozatool.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/pozatool.jpg');
});

app.get('/public/imagini/dog-avatar.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dog-avatar.jpg');
});

app.get('/public/imagini/dogavatar2.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dogavatar2.jpg');
});

app.get('/public/imagini/dogavatar3.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dogavatar3.jpg');
});

app.get('/public/imagini/dogavatar6.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dogavatar6.jpg');
});

app.get('/public/imagini/dog-family.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dog-family.jpg');
});

app.get('/public/imagini/dog-post.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dog-post.jpg');
});

app.get('/public/imagini/dogpost2.png', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dogpost2.png');
});

app.get('/public/imagini/dogpost3.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dogpost3.jpg');
});

app.get('/public/imagini/dog-stock.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/imagini/dog-stock.jpg');
});

app.get('/javascript.js', (req, res) => {
    res.sendFile(__dirname + '/javascript.js');
});

app.get('/server1.js', (req, res) => {
    res.sendFile(__dirname + '/server1.js');
});

app.get('/js-index.js', (req, res) => {
    res.sendFile(__dirname + '/js-index.js');
});

app.get('/js-login.js', (req, res) => {
    res.sendFile(__dirname + '/js-login.js');
});

app.get('/js-signup.js', (req, res) => {
    res.sendFile(__dirname + '/js-signup.js');
});


app.get('*', function (req, res) {

    res.sendFile(__dirname + '/error.html')

});

var k=3; //id-ul
app.post('/adauga-postare', (req, res) => {
    const postareData = req.body;
    postareData.id = k;
    detalii.push(req.body);
    res.statusCode = 201;
    res.send(detalii);
    k=k+1; 
    console.log(detalii);
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))