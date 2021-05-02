var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');

/* GET recipes listing */
router.get('/recipes', recipesCtrl.index);

/* GET new flight form */
router.get('/recipes/new', recipesCtrl.new);
/* GET recipe detail */

module.exports = router;