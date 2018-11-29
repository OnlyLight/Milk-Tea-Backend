module.exports.validateName = function (req, res, next) {
	var name = req.body.nameRole;
	if(!name) {
		res.json({'message': 'Name is require !!'});
		return;
	}
	next();
}