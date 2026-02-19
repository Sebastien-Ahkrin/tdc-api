import vine from '@vinejs/vine'

const recipeDifficulty = ['hard', 'medium', 'easy']
const recipeType = ['dessert']

export const createRecipe = vine.compile(
  vine.object({
    name: vine.string(),
    duration: vine.number(),
    link: vine.string(),
    notice: vine.string().optional(),
    difficulty: vine.enum(recipeDifficulty).optional(),
    type: vine.enum(recipeType).optional(),
  })
)
