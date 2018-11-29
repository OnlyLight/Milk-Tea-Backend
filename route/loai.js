var express = require('express');
var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/loai');
var validate = require('../validate/loai.validate');

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);
router.post('/create', validate.validateLoai, controller.create);
router.patch('/update/:id', validate.validateLoai, controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;