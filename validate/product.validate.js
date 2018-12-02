// Validate params
module.exports.validateProduct = function (req, res, next) {
	var name = req.body.nameProduct;
	var price = req.body.price;
	var image = req.file.path;
	var idLoai = req.body.idLoai;

	if(name.length > 50) {
		res.json({'message': 'Name is too long !!'});
		return;
	}

	if(!name) {
		res.json({'message': 'Name is require !!'});
		return;
	}

	if(!price) {
		res.json({'message': 'Price is require !!'});
		return;
	}

	if(!image) {
		res.json({'message': 'Image is require !!'});
		return;
	}

	if(!idLoai) {
		res.json({'message': 'IdLoai is require !!'});
		return;
	}
	next();
};

// Validate params of route search
module.exports.validateSearchProduct = function (req, res, next) {
	var search = req.query.search;
	if(!search) {
		res.json({'message': 'Param search is require !!'});
		return;
	}
	next();
};

// Validate params of route Filter
module.exports.validateFilterProduct = function (req, res, next) {
	var idLoai = req.query.idLoai;
	if(!idLoai) {
		res.json({'message': 'Param idLoai is require !!'});
		return;
	}
	next();
};

// Validate params of route pager
module.exports.validatePagerProduct = function (req, res, next) {
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