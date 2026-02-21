import vine from '@vinejs/vine'
import { type } from '#database/migrations/1771531849897_create_recipes_table'

export const randomRecipeValidator = vine.compile(
  vine.object({
    type: vine.enum(type).optional(),
  })
)
