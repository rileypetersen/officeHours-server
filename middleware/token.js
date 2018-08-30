const { promisify } = require('util')
const { sign, verify } = require('jsonwebtoken')
const signPromise = promisify(sign)
const verifyPromise = promisify(verify)
const secret = process.env.SECRET_KEY


class Token {

  static sign(id) {
    const sub = { id }
    const expiresIn = '7 days'
    return signPromise({ sub }, secret, { expiresIn })
  };

  static verifyAndExtractHeaderToken(headers) {
    const token = headers.authorization ? headers.authorization.replace('Bearer ', '') : null
    return verifyPromise(token, secret)
  };

}


module.exports = Token;
