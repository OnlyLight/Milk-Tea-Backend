module.exports.validateAccount = function (req, res, next) {
	var name = req.body.nameAccount;
	var idRole = req.body.idRole;
	var sdt = req.body.sdt;
	var diaChi = req.body.diaChi;
	if(!name || !idRole || !sdt || !diaChi) {
		res.json({'message': 'Params is require !!'});
		return;
	}
	next();
};