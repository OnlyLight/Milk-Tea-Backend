var express = require('express');

var con = require('./dbconnect');
var role = require('./route/role'); // done
var account = require('./route/account'); // done
var loai = require('./route/loai'); // done
var product = require('./route/product');
var slide = require('./route/slide');

var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.json());
app.use(urlencodedParser);

app.use("/api/role", role);
app.use("/api/account", account);
app.use("/api/loai", loai);
app.use("/api/product", product);
app.use("/api/slide", slide);

con.connect(function(err) {
	if (err) throw err;
	console.log('Connected DB !!');
});

app.listen(3000,function(){
    console.log('Node server running http://localhost:3000');
});