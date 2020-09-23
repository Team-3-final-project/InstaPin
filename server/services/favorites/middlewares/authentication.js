const {decode} = require('../helpers/jwt.js')
const checkUser = require('../helpers/checkUser.js')
module.exports = async (req,res,next) => {
    try {
        if(req.headers.access_token) {
            const userLogin = decode(req.headers.access_token)
            if (userLogin.name === 'JsonWebTokenError' || !userLogin) return next({errCode: 'INVALID_ACCOUNT'})

            const isValid = await checkUser(userLogin.email)

            if(isValid) {
                req.userLogin = userLogin
                next()
            } else {
                next({errCode: 'INVALID_ACCOUNT', message: 'Wrong account!'})
            }
        }
        else {
            next ({errCode: 'INVALID_ACCOUNT'})
        }
    }
    catch (err) {
        next(err)
    }

}