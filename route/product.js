var express = require('express');
var multer = require('multer');

var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/product');
var upload = multer({dest: './uploads/images/product'});
var validate = require('../validate/product.validate');

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);

router.get('/search', validate.validateSearchProduct, controller.searchName); // search Name With query is search
router.get('/filter', validate.validateFilterProduct, controller.filter); // filter Role With query is idLoai

router.get('/pager', validate.validatePagerProduct, controller.pager); // Pager with link like localhost:3000/api/product/pager?idLoai=1&_limit=5&_page=2

router.post('/create', upload.single('file'), validate.validateProduct, controller.create);
router.patch('/update/:id', upload.single('file'), validate.validateProduct, controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;