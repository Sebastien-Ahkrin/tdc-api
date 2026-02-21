import { BaseSchema } from '@adonisjs/lucid/schema'

export const difficulty = ['hard', 'medium', 'easy']
export const type = ['dessert', 'fast', 'healthy', 'comfort', 'student', 'drink']

export default class extends BaseSchema {
  protected tableName = 'recipes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('name')
      table.integer('duration')
      table.enum('difficulty', difficulty).nullable()
      table.enum('type', type).nullable()
      table.string('link')
      table.string('notice').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
