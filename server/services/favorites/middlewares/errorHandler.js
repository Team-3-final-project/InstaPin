module.exports = (err, req, res, next) => {
    // console.log(err);
    let message = 'Internal server error'
    let statusCode = 500

    if(err.errCode === 'INVALID_ACCOUNT') {
        message = err.message || ['Please login first']
        statusCode = 401
    }
    if(err.errCode === 'NOT_FOUND') {
        message = 'Data not found'
        statusCode = 404
    }

    if(err.name === 'Error'){
        message = 'Invalid Id'
        statusCode = 404
    }
    res.status(statusCode).json({message})
}