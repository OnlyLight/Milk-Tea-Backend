var express = require('express');
var router = express.Router();

var con = require('../dbconnect');
var controller = require('../controller/account');
var validate = require('../validate/account.validate');

router.get('/list', controller.list);
router.get('/list/:id', controller.listByID);

router.get('/search', validate.validateSearchAccount, controller.searchName); // search Name With query is search
router.get('/filter', validate.validateFilterAccount, controller.filter); // filter Role With query is IdRole

router.get('/pager', validate.validatePagerAccount, controller.pager); // Pager with link like localhost:3000/api/account/pager?idLoai=1&_limit=5&_page=2

router.post('/create', validate.validateAccount, controller.create);
router.patch('/update/:id', validate.validateAccount, controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;