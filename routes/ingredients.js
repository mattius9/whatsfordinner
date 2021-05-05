var express = require('express');
var router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

/* PUT ingredient into recipe ingredients lists */
router.put('/recipes/:id/ingredients', ingredientsCtrl.addToRecipe);

module.exports = router;