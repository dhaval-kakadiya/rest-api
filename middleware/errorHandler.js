const {prepareErrorMessage,prepareSuccessMessage} =require('../utils/responseHandler')

const errorHandler = (err,req,res,next) => {
    const errorMessage = err.errorMessage
    const statusCode = err.statusCode || 500
    return res.status(statusCode).json(prepareErrorMessage(errorMessage))
}

const notFound404 = (req,res,next) => {
    return res.status(404).json({
        success : false,
        message : 'Url Not Found'
    })
}

module.exports = {
    errorHandler,
    notFound404
}