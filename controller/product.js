var con = require('../dbconnect');

module.exports.list = function (req, res) {
	var sql = "SELECT * FROM product";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.listByID = function (req, res) {
	var id = req.params.id;
	var sql = "SELECT * FROM product WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.searchName = function (req, res) {
	var search = req.query.search;
	var sql = "SELECT * FROM product WHERE Name LIKE '%"+search+"%'";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Delete Success !!'});
	});
};

module.exports.create = function (req, res) {
	var name = req.body.nameProduct;
	var price = parseInt(req.body.price);
	var image = req.file.path;
	var idLoai = parseInt(req.body.idLoai);
	var sql = "INSERT INTO product (Name, Price, Image, IdLoai) VALUES ('"+name+"', "+price+", '"+image+"', "+idLoai+")";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Insert Success !!'});
	});
};

module.exports.update = function (req, res) {
	var id = req.params.id;
	var name = req.body.nameProduct;
	var price = parseInt(req.body.price);
	var image = req.file.path;
	var idLoai = parseInt(req.body.idLoai);
	var sql = "UPDATE product SET Name = '"+name+"',Price = "+price+",Image = '"+image+"',IdLoai = "+idLoai+" WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Delete Success !!'});
	});
};

module.exports.delete = function (req, res) {
	var id = req.params.id;
	var sql = "DELETE FROM product WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Delete Success !!'});
	});
};