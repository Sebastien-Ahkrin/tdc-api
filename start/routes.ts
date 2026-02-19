/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const RecipeController = () => import('#controllers/recipes_controller')

router.get('/recipes', [RecipeController, 'index'])
router.post('/recipe', [RecipeController, 'create'])
