const logger = function (req,res,next)
{
    console.log('Time '+new Date()+' path ',req.path);
    req.user = {
        id:1,
        name: "Hello"
    }
    next();
}
module.exports = logger;