import vine from '@vinejs/vine'
import { difficulty, type } from '#database/migrations/1771531849897_create_recipes_table'

export const createRecipeValidator = vine.compile(
  vine.object({
    name: vine.string(),
    duration: vine.number(),
    link: vine.string(),
    notice: vine.string().optional(),
    difficulty: vine.enum(difficulty).optional(),
    type: vine.enum(type).optional(),
  })
)
