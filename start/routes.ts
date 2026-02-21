/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const RecipeController = () => import('#controllers/recipes_controller')

router.get('/recipes', [RecipeController, 'all'])
router.get('/recipe', [RecipeController, 'index']).use(middleware.botAuthentication())
router.post('/recipe', [RecipeController, 'create']).use(middleware.botAuthentication())
