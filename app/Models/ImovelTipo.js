'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImovelTipo extends Model {
    static boot () {
        super.boot()
        this.addTrait('NoTimestamp')
    }

    static get primaryKey() {
        return 'imovel_tipo_id'
    }
}

module.exports = ImovelTipo
