'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Regiao extends Model {
    static boot() {
        super.boot()
        this.addTrait('NoTimestamp')
    }

    static get primaryKey() {
        return 'regiao_id'
    }

    visitas() {
        return this.hasMany('App/Models/Visita')
    }
}

module.exports = Regiao