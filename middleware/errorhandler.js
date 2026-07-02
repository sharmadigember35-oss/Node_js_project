// here we create a middleware that accept over request and give output in json() formate 
const {constants} = require('constants')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
        title:"its not found ",
        message: err.message,
        stackTrace: err.stack
    });
}

module.exports = errorHandler;