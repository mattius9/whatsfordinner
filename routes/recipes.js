var express = require('express');
var router = express.Router();
const recipesCtrl = require('../controllers/recipes');

/* GET recipes listing */
router.get('/recipes', recipesCtrl.index);

/* GET new flight form */
router.get('/recipes/new', recipesCtrl.new);
/* GET recipe detail */

/* GET recipe update form */
router.get('/recipes/:id/edit', recipesCtrl.editForm);

/* POST new recipe */
router.post('/recipes', recipesCtrl.create);

/* PUT update recipe */
router.put('/recipes/:id', recipesCtrl.update);

module.exports = router;