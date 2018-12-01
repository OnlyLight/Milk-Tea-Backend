var express = require('express');
var multer = require('multer');

var upload = multer({dest: './public/uploads/'});

var con = require('./dbconnect');
var role = require('./route/role'); // done
var account = require('./route/account'); // done
var loai = require('./route/loai'); // done
var product = require('./route/product');
var slide = require('./route/slide');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static("public")); // vào đây để tìm file
app.use(bodyParser.json());
app.use(urlencodedParser);

app.use("/api/role", role);
app.use("/api/account", account);
app.use("/api/loai", loai);
app.use("/api/product", product);
app.use("/api/slide", slide);

app.set("view engine", "pug");
app.set("views", "./views");

con.connect(function(err) {
	if (err) throw err;
	console.log('Connected DB !!');
});

// Test Upload
app.get('/upload', function (req, res) {
	res.render('upload');
});

app.post('/upload', upload.single('file'), function (req, res) {
	var ava = req.file.path;
	// console.log(ava);
	var urlAva = ava.split('/');
	console.log(urlAva);
	res.end(urlAva);
});
// END Test Upload

app.listen(3000,function(){
    console.log('Node server running http://localhost:3000');
});