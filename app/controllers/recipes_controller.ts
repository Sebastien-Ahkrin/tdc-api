import type { HttpContext } from '@adonisjs/core/http'
import Recipe from '#models/recipe'

export default class RecipesController {
  // Get a random recipe
  public async index({ response }: HttpContext) {
    const recipes = await Recipe.all()
    return response.ok(recipes)
  }
}
