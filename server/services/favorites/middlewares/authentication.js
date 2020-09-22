const {decode} = require('../helpers/jwt.js')

module.exports = (req,res,next) => {

    if(req.headers.access_token) {
        const userLogin = decode(req.headers.access_token)
        if (!userLogin) return next({errCode: 'INVALID_ACCOUNT'})
        req.userLogin = userLogin
        next()
    }
    else {
        next ({errCode: 'INVALID_ACCOUNT'})
    }

}