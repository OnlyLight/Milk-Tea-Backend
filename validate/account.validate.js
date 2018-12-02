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

// Validate params of route search
module.exports.validateSearchAccount = function (req, res, next) {
	var search = req.query.search;
	if(!search) {
		res.json({'message': 'Param search is require !!'});
		return;
	}
	next();
};

// Validate params of route Filter
module.exports.validateFilterAccount = function (req, res, next) {
	var idLoai = req.query.idLoai;
	if(!idLoai) {
		res.json({'message': 'Param idLoai is require !!'});
		return;
	}
	next();
};

// Validate params of route pager
module.exports.validatePagerAccount = function (req, res, next) {
	var idLoai = req.query.idLoai;
	var _limit = req.query._limit;
	var _page = req.query._page;
	if(!idLoai) {
		res.json({'message': 'Param idLoai is require !!'});
		return;
	}
	if(!_limit) {
		res.json({'message': 'Param _limit is require !!'});
		return;
	}
	if (!_page) {
		res.json({'message': 'Param _page is require !!'});
		return;
	}
	next();
};