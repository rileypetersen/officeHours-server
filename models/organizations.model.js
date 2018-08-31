const Model = require('./model.js')(`organizations`);
const knex = require('../db/knex');
const bcrypt = require('bcryptjs')


class OrganizationsModel extends Model {
  constructor(){
    super()
  };

  static getOrgByName(name) {
    return knex('organizations')
      .where({ name })
      .first()
  }

};


module.exports= OrganizationsModel
