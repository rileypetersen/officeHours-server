const knex = require('../db/knex');


module.exports = (tableName) => {

    class Model {

        static all() {
            return db(tableName)
        }

        static one(id) {
            return db(tableName)
                .where({ id })
                .first()
        }

        static create(body) {
            return db(tableName)
                .insert(body)
                .returning('*')
                .then(([res]) => res)
        }

        static update(id, body) {
            return db(tableName)
                .update(body)
                .where({ id })
                .returning('*')
                .then(([res]) => res)
        }

        static destroy(id) {
            return db(tableName)
                .del()
                .where({ id })
                .returning('*')
                .then(([res]) => res)
        }

    }

    return Model

};