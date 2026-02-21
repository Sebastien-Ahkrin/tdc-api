import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export type RecipeDifficulty = 'hard' | 'medium' | 'easy'
export type RecipeType = 'dessert' | 'dish'

export default class Recipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare duration: number

  @column()
  declare link: string

  @column()
  declare difficulty?: RecipeDifficulty

  @column()
  declare type?: RecipeType

  @column()
  declare notice?: string
}
