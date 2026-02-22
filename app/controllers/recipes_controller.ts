import type { HttpContext } from '@adonisjs/core/http'
import Recipe, { RecipeDifficulty, RecipeType } from '#models/recipe'
import { createRecipeValidator } from '#validators/create_recipe'
import { CreateRecipe, RecipeService } from '#services/recipe_service'
import { randomRecipeValidator } from '#validators/random_recipe'

export default class RecipesController {
  // Get a random recipe
  public async index({ response, request }: HttpContext) {
    const { type } = await request.validateUsing(randomRecipeValidator)

    let results: Recipe[] | null = []

    if (type) {
      results = await Recipe.query().whereRaw('type = ?', [type])
    } else {
      results = await Recipe.all()
    }

    const randomIndex = Math.floor(Math.random() * results.length)
    const recipe = results[randomIndex]

    if (!recipe) {
      return response.ok({ data: 'No recipe found' })
    }

    return response.ok(recipe)
  }

  public async all({ response }: HttpContext) {
    const recipes = await Recipe.all()
    return response.ok(recipes)
  }

  public async create({ response, request }: HttpContext) {
    const validation = await request.validateUsing(createRecipeValidator)
    const service = new RecipeService()

    const obj: CreateRecipe = {
      ...validation,
      difficulty: validation.difficulty as RecipeDifficulty,
      type: validation.type as RecipeType,
    }

    return response.ok(service.create(obj))
  }
}
