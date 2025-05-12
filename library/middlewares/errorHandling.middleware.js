export const notFound = (req, res, next)=>{
    next({status: 404, message: 'Not Found'});
}
export const errorHandling = (err, req, res, next) => {
    const status = err.status?? 500;
    const msg= err.message?? 'Internal Server Error';
    res.status(status).json({
        status: 'error',
        statusCode: status,
        message: msg
    });
}