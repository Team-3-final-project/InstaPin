const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET ;

function decode (accesToken) {
    try {
        let decoded = jwt.verify(accesToken, secretKey);
        return decoded;
    } catch (err) {
        return err;
    };
};

module.exports = {
    decode
};