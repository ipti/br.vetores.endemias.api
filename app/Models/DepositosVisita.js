'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DepositosVisita extends Model {
    static boot() {
        super.boot()
        this.addTrait('NoTimestamp')
        this.addHook('beforeCreate', (DepositosVisita) => {
            DepositosVisita.is_current_owner = true
        })
    }

    static get primaryKey() {
        return 'depositosvisitas_id'
    }
}

module.exports = DepositosVisita
