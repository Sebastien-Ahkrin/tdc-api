import type { HttpContext } from '@adonisjs/core/http'
import Recipe, { RecipeDifficulty, RecipeType } from '#models/recipe'
import { createRecipe } from '#validators/create_recipe'
import { CreateRecipe, RecipeService } from '#services/recipe_service'

export default class RecipesController {
  // Get a random recipe
  public async index({ response }: HttpContext) {
    const recipe = await Recipe.query().orderByRaw('RAND()').first()
    return response.ok(recipe)
  }

  public async create({ response, request }: HttpContext) {
    const validation = await request.validateUsing(createRecipe)
    const service = new RecipeService()

    const obj: CreateRecipe = {
      ...validation,
      difficulty: validation.difficulty as RecipeDifficulty,
      type: validation.type as RecipeType,
    }

    return response.ok(service.create(obj))
  }
}
