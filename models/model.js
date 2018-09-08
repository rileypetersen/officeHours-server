const knex = require('../db/knex');


module.exports = (tableName) => {

    class Model {

        static index() {
            return knex(tableName)
        };

        static show(id) {
            return knex(tableName)
                .where({ id })
                .first()
                .then(res => {
                        if (!res) throw new Error(`${tableName}NotFound`)
                        return res
                })
        };

        static create(body) {
            return knex(tableName)
                .insert(body)
                .returning('*')
                .then(([res]) => {
                    if (!res) throw new Error(`${tableName}NotFound`)
                    return res
                })
        };

        static update(id, body) {
            return knex(tableName)
                .update(body)
                .where({ id })
                .returning('*')
                .then(([res]) => {
                    if (!res) throw new Error(`${tableName}NotFound`)
                    return res
                })
        };

        static destroy(id) {
            return knex(tableName)
                .del()
                .where({ id })
                .returning('*')
                .then(([res]) => {
                    if (!res) throw new Error(`${tableName}NotFound`)
                    return res
                })
        };

    }

    return Model

};
