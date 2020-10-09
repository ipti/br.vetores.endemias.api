'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepositosVisitasSchema extends Schema {
  up () {
    this.create('depositos_visitas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('depositos_visitas')
  }
}

module.exports = DepositosVisitasSchema
