var express = require('express');
var multer = require('multer');

var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/product');
var upload = multer({dest: './uploads/images/product'});
var validate = require('../validate/role.validate');

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);
router.get('/searchName', controller.searchName);
// router.get('/pager', controller.pager);
router.post('/create', upload.single('file'), validate.validateProduct, controller.create);
router.patch('/update/:id', upload.single('file'), validate.validateProduct, controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;