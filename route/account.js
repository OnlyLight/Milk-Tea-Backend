var express = require('express');
var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/role');

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);
router.post('/create', controller.createRole);
router.patch('/update/:id', controller.updateRole);
router.delete('/delete/:id', controller.deleteRole);

module.exports = router;