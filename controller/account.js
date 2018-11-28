var con = require('../dbconnect');

module.exports.list = function (req, res) {
	var sql = "SELECT * FROM account";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.listByID = function (req, res) {
	var id = req.params.id;
	var sql = "SELECT * FROM account WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.create = function (req, res) {
	var name = req.body.nameAccount;
	var idRole = req.body.idRole;
	var sdt = req.body.sdt;
	var diaChi = req.body.diaChi;
	console.log("Hello");
	var sql = "INSERT INTO account (Name, IdRole, Sdt, DiaChi) VALUES ('"+name+"', "+idRole+", '"+sdt+"', '"+diaChi+"')";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Create Success !!'});
	});
};

module.exports.update = function (req, res) {
	var id = req.params.id;
	var name = req.body.nameAccount;
	var idRole = req.body.idRole;
	var sdt = req.body.sdt;
	var diaChi = req.body.diaChi;
	var sql = "UPDATE account SET Name = '"+name+"', IdRole = "+idRole+", Sdt = '"+sdt+"', DiaChi = '"+diaChi+"' WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Update Success !!'});
	});
};

module.exports.delete = function (req, res) {
	var id = req.params.id;
	var sql = "DELETE FROM account WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Delete Success !!'});
	});
};