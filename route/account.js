var express = require('express');
var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/account');
var validate = require('../validate/account.validate');

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);
router.post('/create', validate.validateAccount, controller.create);
router.patch('/update/:id', validate.validateAccount, controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;