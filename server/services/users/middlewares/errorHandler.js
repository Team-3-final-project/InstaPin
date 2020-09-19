function errorHandler (err, req, res, next) {
    let status;
    let message;
    switch (err.type) {
        case 'EmptyField':
            res.status(err.status).json({message: err.message});
            break;
        case 'ValidationError':
            res.status(err.status).json({message: err.message});
            break;
        case 'NotFound':
            res.status(err.status).json({message: err.message});
            break;
        default:
            return res.status(500).json({message: 'Internal Server Error'})
    }
}

module.exports = errorHandler