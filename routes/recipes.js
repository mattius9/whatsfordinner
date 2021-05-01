var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');

/* GET recipes listing */
router.get('/', recipesCtrl.index);

/* GET new flight form */

/* GET recipe detail */

module.exports = router;