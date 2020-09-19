const { checkPassword } = require('../helpers/bcrypt')
const { encode } = require('../helpers/jwt')
const { User } = require('../models')

class UserController {
    static register (req, res, next) {
        const { username, email, password } = req.body
        if (!username) {
            throw {
                type: 'EmptyField',
                status: 400,
                message: 'username cannot be empty'
            }
        }
        if (!email) {
            throw {
                type: 'EmptyField',
                status: 400,
                message: 'email cannot be empty'
            }
        }
        if (!password) {
            throw {
                type: 'EmptyField',
                status: 400,
                message: 'password cannot be empty'
            }
        }
        User.create({
            username,
            email,
            password
        })
            .then(newUser => {
                const access_token = encode ({
                    id: newUser.id,
                    username: newUser.username
                })
                res.status(201).json({ access_token })
            })
            .catch(err => {
                return err
            })
    }

    static login (req, res, next) {
        console.log(req.body, '-------------1');
        let message;
        const { username, email, password } = req.body;
        // if (!username) {
        //     message = 'username cannot be empty';
        // };
        if (!email) {
            message = 'email cannot be empty';
        };
        if (!password) {
            message = 'password cannot be empty';
        };
        if (message) {
            throw {
                status: 400,
                type: 'EmptyField',
                message: message
            };
        };
        User.findOne({
            where: {email: req.body.email}
        })
            .then(data => {
                if (!data) {
                    throw {
                        status: 404,
                        type: 'NotFound',
                        message: 'user not found'
                    }
                }
                if (checkPassword(password, data.password)) {
                    const access_token = encode ({
                        id: data.id,
                        username: data.username
                    })
                    return res.status(200).json({ access_token })
                } else {
                    throw {
                        type: 'ValidationError',
                        message: 'Username or password incorrect',
                        status: 401
                    }
                }
            })
            .catch (err => {
                next(err)
            })
    }
}

module.exports = UserController