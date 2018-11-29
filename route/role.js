var express = require('express');
var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/role');
var validate = require('../validate/role.validate');

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);
router.post('/create', validate.validateName, controller.createRole);
router.patch('/update/:id', validate.validateName, controller.updateRole);
router.delete('/delete/:id', controller.deleteRole);

module.exports = router;