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