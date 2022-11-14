const prepareSuccessMessage = (data,message) =>{
    return {
        success : true,
        data : data,
        message : message
    }
}

const prepareErrorMessage = (message) =>{
    return {
        success : false,
        message : message
    }
}

module.exports = {
    prepareSuccessMessage,
    prepareErrorMessage
}