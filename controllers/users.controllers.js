const controller = require('./controller.js')(`users`);
const { usersModels } = require('../models');


class users extends controller {
  constructor(){
    super()
  } 

  static isValidUserCreate(req, res, next) {
    const { name, username, email, password, zipcode, phone } = req.body.create
    if (!name || typeof name !== 'string') throw new Error ('registerNameWrong')
    if (!username || typeof username !== 'string') throw new Error ('registerUsernameWrong')
    if (!password || typeof password !== 'string') throw new Error ('registerPasswordWrong')
    if (!zipcode || typeof zipcode !== 'number') throw new Error ('registerZipWrong')
    if (!phone || typeof phone !== 'string') throw new Error ('registerPhoneWrong')
    if (!email || typeof email !== 'string') throw new Error ('registerEmailWrong')
    next();
  }

  static isValidUserPatch(req, res, next) {
    const { name, username, email, password, zipcode, phone } = req.body.create
    if (!name && !username && !email && !password && !zipcode && !phone) throw new Error('aFieldRequired')
    next();
  }

};


module.exports = users;
