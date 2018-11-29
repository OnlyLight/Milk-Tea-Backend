module.exports.validateLoai = function (req, res, next) {
	var name = req.body.nameLoai;
	if(!name) {
		res.json({'message': 'Name is require !!'});
		return;
	}
	next();
};