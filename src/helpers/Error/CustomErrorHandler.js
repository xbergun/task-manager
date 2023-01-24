const customErrorHandler = (err, req, res, next) => {
    let customError = {
        success: false,
        message: err.message,
    };
    if (err.name === "CastError") {
        customError.message = "Resource not found";
        customError.status = 404;
    }
    if (err.code === 11000) {
        customError.message = "Duplicate key error";
        customError.status = 400;
    }
    if (err.name === "ValidationError") {
        customError.message = Object.values(err.errors).map((val) => val.message);
        customError.status = 400;
    }
    res.status(customError.status || 500).json(customError);
    };

export default customErrorHandler;