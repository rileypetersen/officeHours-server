const Model = require('./model.js')(`tags`);
const knex = require('../db/knex');


class TagsModel extends Model {
	constructor(){
		super()
	};

};


module.exports = TagsModel;