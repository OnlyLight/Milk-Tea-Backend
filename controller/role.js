var con = require('../dbconnect');

module.exports.list = function (req, res) {
	var sql = "SELECT * FROM role";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.listByID = function (req, res) {
	var id = req.params.id;
	var sql = "SELECT * FROM role WHERE IdRole = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.createRole = function (req, res) {
	var name = req.body.nameRole;
	var sql = "INSERT INTO role (NameRole) VALUES ('"+name+"')";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Create Success !!'});
	});
};

module.exports.updateRole = function (req, res) {
	var id = req.params.id;
	var name = req.body.nameRole;
	var sql = "UPDATE role SET NameRole = '"+name+"' WHERE IdRole = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Update Success !!'});
	});
};

module.exports.deleteRole = function (req, res) {
	var id = req.params.id;
	var sql = "DELETE FROM role WHERE IdRole = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Delete Success !!'});
	});
};