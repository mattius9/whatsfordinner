var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

/* GET ingredient index */
router.get('/ingredients', ingredientsCtrl.index);

module.exports = router;