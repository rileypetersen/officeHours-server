const Controller = require('./Controller.js')(`Users`);
const { UsersModel } = require('../models');


class UsersController extends Controller {
  constructor(){
    super()
  } 

  static isValidUserCreate(req, res, next) {
    const { user_type, first_name, last_name, user_name, profile_img_url, title, short_description, long_description, linkedin_url, website_url, can_create_session } = req.body
    if (!user_type || typeof user_type !== 'string') throw new Error('badUserType')
    if (!first_name || typeof first_name !== 'string') throw new Error('badFirstName')
    if (!last_name || typeof last_name !== 'string') throw new Error('badLastName')
    if (!user_name || typeof user_name !== 'string') throw new Error('badUserName')
    if (!profile_img_url || typeof profile_img_url !== 'string') throw new Error('badProfileImg')
    if (!title || typeof title !== 'string') throw new Error('badTitle')
    if (!short_description || typeof short_description !== 'string') throw new Error('badShortDescription')
    if (!long_description || typeof long_description !== 'string') throw new Error('badLongDescription')
    if (!linkedin_url || typeof linkedin_url !== 'string') throw new Error('badLinkedinURL')
    if (!website_url || typeof website_url !== 'string') throw new Error('badWebsiteURL')
    if (typeof can_create_session !== 'boolean') throw new Error('badCanCreateSession')

    // abstract error handling to new file

    // make use of UsersModels.getUserByUsername(user_name) to see if it's taken.  if it is, throw error else! next()
    UsersModel.getUserByUsername(user_name)
      .then(user => {
        if (user !== undefined) throw new Error('userNameTaken')
        next();
      })
      .catch(err => next(err));
  }

  static isValidUserPatch(req, res, next) {
    const { user_type, first_name, last_name, user_name, profile_img_url, title, short_description, long_description, linkedin_url, website_url, can_create_session } = req.body
    if (!user_type && !first_name && !last_name && !user_name && !profile_img_url && !title && !short_description && !long_description && !linkedin_url && !website_url) throw new Error('aFieldRequired')
    next();
  }

};


module.exports = UsersController;