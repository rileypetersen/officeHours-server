const Model = require('./model.js')(`organizations`);
const knex = require('../db/knex');
const bcrypt = require('bcryptjs')


class OrganizationsModel extends Model {
  constructor(){
    super()
  };

};


module.exports= OrganizationsModel
