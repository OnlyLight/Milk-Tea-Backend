var con = require('../dbconnect');

// Get All Data
module.exports.list = function (req, res) {
	var sql = "SELECT * FROM account";
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
	var sql = "SELECT * FROM account WHERE Id = "+id+"";
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
	var sql = "SELECT * FROM account WHERE account.Name LIKE '%"+search+"%'";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json(results);
	});
};

// Filter product with idLoai
module.exports.filter = function (req, res) {
	var IdRole = req.query.IdRole;
	var sql = "SELECT * FROM account WHERE IdRole = "+IdRole+"";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json(results);
	});
};

// Pager Products
module.exports.pager = function (req, res) {
	var IdRole = req.query.IdRole;
	var _limit = req.query._limit;
	var _page = req.query._page;
	var sql = "SELECT * FROM account WHERE product.IdRole = "+IdRole+" ORDER BY Id DESC LIMIT "+_page+", "+_limit+"";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json(results);
	});
};

// Insert new Product
module.exports.create = function (req, res) {
	var name = req.body.nameAccount;
	var idRole = parseInt(req.body.idRole);
	var sdt = req.body.sdt;
	var diaChi = req.body.diaChi;
	var sql = "INSERT INTO account (Name, IdRole, Sdt, DiaChi) VALUES ('"+name+"', "+idRole+", '"+sdt+"', '"+diaChi+"')";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json({'message': 'Create Success !!'});
	});
};

// Update Product By Id
module.exports.update = function (req, res) {
	var id = req.params.id;
	var name = req.body.nameAccount;
	var idRole = parseInt(req.body.idRole);
	var sdt = req.body.sdt;
	var diaChi = req.body.diaChi;
	var sql = "UPDATE account SET Name = '"+name+"', IdRole = "+idRole+", Sdt = '"+sdt+"', DiaChi = '"+diaChi+"' WHERE Id = "+id+"";
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
	var sql = "DELETE FROM account WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		// If Error crash here
		if (err) throw err;
		// If don't have Error return results
		res.json({'message': 'Delete Success !!'});
	});
};