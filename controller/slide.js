var con = require('../dbconnect');

module.exports.list = function (req, res) {
	var sql = "SELECT * FROM slide";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.listByID = function (req, res) {
	var id = req.params.id;
	var sql = "SELECT * FROM slide WHERE Id = "+id+"";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json(results);
	});
};

module.exports.create = function (req, res) {
	var image = req.file.path;
	var sql = "INSERT INTO slide (Image) VALUES ('"+image+"')";
	con.query(sql, function(err, results) {
		if (err) throw err;
		res.json({'message': 'Insert Success !!'});
	});
};