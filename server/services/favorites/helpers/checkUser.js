const axios = require('axios')

module.exports = async (email) => {
    console.log(email, '-------1');
    try{
        const {data} = await axios({
            url: 'http://localhost:3000/checkUser',
            method: 'post',
            data: {
                email
            }
        })
        return data.isValid
    }
    catch(err) {
        console.log(err);
        throw ({errCode: 'INVALID_ACCOUNT', message: 'Wrong account!'})
    }
}