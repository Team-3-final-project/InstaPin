function errorHandler (err, req, res, next) {
    // console.log('>>>', err.name, 'di handler <<');
    let status;
    let message;
    switch (err.name) {
        case 'EmptyField':
            res.status(err.status).json({message: err.message});
            break;
        case 'ValidationError':
            res.status(err.status).json({message: err.message});
            break;
        case 'NotFound':
            res.status(err.status).json({message: err.message});
            break;
        case 'SequelizeUniqueConstraintError':
            console.log('error sequelize <<<');
            return res.status(409).json({message: "Email already registered!"});
        default:
            return res.status(500).json({message: 'Internal Server Error'})
    }
}

module.exports = errorHandler