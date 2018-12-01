var express = require('express');
var multer = require('multer');

var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/slide');
var upload = multer({dest: './public/uploads/'});

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);
router.post('/create', upload.single('file'), controller.create);
// router.patch('/update/:id', controller.update);
// router.delete('/delete/:id', controller.delete);

module.exports = router;