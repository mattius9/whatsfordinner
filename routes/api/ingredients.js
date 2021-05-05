var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../../controllers/api/ingredients');

/* POST search results */
router.get('/ingredients/:q', ingredientsCtrl.search);


module.exports = router;