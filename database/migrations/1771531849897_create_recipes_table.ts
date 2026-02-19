import { BaseSchema } from '@adonisjs/lucid/schema'

const difficulty = ['hard', 'medium', 'easy']
const type = ['dessert']

export default class extends BaseSchema {
  protected tableName = 'recipes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('name')
      table.string('duration')
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
