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
	var sql = "SELECT * FROM account WHERE IdAccount = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.createRole = function (req, res) {
	var name = req.body.nameAccount;
	var sdt = req.body.sdt;
	var diaChi = req.body.diaChi;
	var idRole = req.body.idRole;
	var sql = "INSERT INTO account (Ten, Sdt, DiaChi, IdRole) VALUES ('"+name+"', '"+sdt+"', '"+diaChi+"', "+idRole+")";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Create Success !!'});
	});
};

// Update continue
module.exports.updateRole = function (req, res) {
	var id = req.params.id;
	var name = req.body.nameAccount;
	var sdt = req.body.sdt;
	var diaChi = req.body.diaChi;
	var idRole = req.body.idRole;
	var sql = "UPDATE account SET Ten = '"+name+"', Sdt = '"+sdt+"', DiaChi = '"+diaChi+"', IdRole = "+id+" WHERE IdAccount = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Update Success !!'});
	});
};

module.exports.deleteRole = function (req, res) {
	var id = req.params.id;
	var sql = "DELETE FROM role WHERE IdAccount = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Delete Success !!'});
	});
};