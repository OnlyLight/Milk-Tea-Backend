var con = require('../dbconnect');

// Get All Data
module.exports.list = function (req, res) {
	var sql = "SELECT * FROM product";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json(results);
	});
};

// Get Data by ID
module.exports.listByID = function (req, res) {
	var id = req.params.id;
	var sql = "SELECT * FROM product WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json(results);
	});
};

// Search Name Product have in list products
module.exports.searchName = function (req, res) {
	var search = req.query.search;
	var sql = "SELECT * FROM product WHERE Name LIKE '%"+search+"%'";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json(results);
	});
};

// Filter product with idLoai
module.exports.filter = function (req, res) {
	var idLoai = req.query.idLoai;
	var sql = "SELECT * FROM product WHERE IdLoai = "+idLoai+"";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json(results);
	});
};

// Pager Products
module.exports.pager = function (req, res) {
	var idLoai = req.query.idLoai;
	var _limit = req.query._limit;
	var _page = req.query._page;
	var sql = "SELECT * FROM product WHERE product.IdLoai = "+idLoai+" ORDER BY Id DESC LIMIT "+_page+", "+_limit+"";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json(results);
	});
};

// Insert new Product
module.exports.create = function (req, res) {
	var name = req.body.nameProduct;
	var price = parseInt(req.body.price);
	var image = req.file.path;
	var idLoai = parseInt(req.body.idLoai);
	var sql = "INSERT INTO product (Name, Price, Image, IdLoai) VALUES ('"+name+"', "+price+", '"+image+"', "+idLoai+")";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json({'message': 'Insert Success !!'});
	});
};

// Update Product By Id
module.exports.update = function (req, res) {
	var id = req.params.id;
	var name = req.body.nameProduct;
	var price = parseInt(req.body.price);
	var image = req.file.path;
	var idLoai = parseInt(req.body.idLoai);
	var sql = "UPDATE product SET Name = '"+name+"',Price = "+price+",Image = '"+image+"',IdLoai = "+idLoai+" WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json({'message': 'Update Success !!'});
	});
};

// Delete Product By Id
module.exports.delete = function (req, res) {
	var id = req.params.id;
	var sql = "DELETE FROM product WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json({'message': 'Delete Success !!'});
	});
};