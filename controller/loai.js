var con = require('../dbconnect');

module.exports.list = function (req, res) {
	var sql = "SELECT * FROM loai";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.listByID = function (req, res) {
	var id = req.params.id;
	var sql = "SELECT * FROM loai WHERE IdLoai = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.create = function (req, res) {
	var name = req.body.nameLoai;
	var sql = "INSERT INTO loai (TenLoai) VALUES ('"+name+"')";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Create Success !!'});
	});
};

module.exports.update = function (req, res) {
	var id = req.params.id;
	var name = req.body.nameLoai;
	var sql = "UPDATE loai SET TenLoai = '"+name+"' WHERE IdLoai = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Update Success !!'});
	});
};

module.exports.delete = function (req, res) {
	var id = req.params.id;
	var sql = "DELETE FROM loai WHERE IdLoai = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Delete Success !!'});
	});
};