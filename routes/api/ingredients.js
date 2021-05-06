var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../../controllers/api/ingredients');

/* POST search results */
router.get('/ingredients/:q', ingredientsCtrl.search);

/* GET all ingredients */
router.get('/ingredients', ingredientsCtrl.index);

/* POST new Ingredient */
router.post('/ingredients', ingredientsCtrl.add);


module.exports = router;