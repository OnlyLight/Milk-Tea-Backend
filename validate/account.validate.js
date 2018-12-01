module.exports.validateAccount = function (req, res, next) {
	var name = req.body.nameAccount;
	var idRole = req.body.idRole;
	var sdt = req.body.sdt;
	var diaChi = req.body.diaChi;
	if(!name) {
		res.json({'message': 'Name is require !!'});
		return;
	}

	if(!sdt) {
		res.json({'message': 'Sdt is require !!'});
		return;
	}

	if(!diaChi) {
		res.json({'message': 'DiaChi is require !!'});
		return;
	}

	if(!idLoai) {
		res.json({'message': 'IdLoai is require !!'});
		return;
	}
	next();
};