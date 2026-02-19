import Recipe, { RecipeDifficulty, RecipeType } from '#models/recipe'

export interface CreateRecipe {
  name: string
  duration: number
  link: string
  notice?: string
  difficulty?: RecipeDifficulty
  type?: RecipeType
}

export class RecipeService {
  public async create(options: CreateRecipe) {
    return Recipe.create({ ...options })
  }
}
