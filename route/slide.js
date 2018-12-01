var express = require('express');
var multer = require('multer');

var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/slide');
var upload = multer({dest: './uploads/images/slide'});

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);
router.post('/create', upload.single('file'), controller.create);

module.exports = router;