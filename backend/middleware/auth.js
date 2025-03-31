const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { config } = require('./../config/Config');
async function verifyUserToken  (req,res,next)
{
    console.log('JWT Middleware');
    let authToken = req.headers.authorization;
    //console.log('Auth Token ',authToken);
    if(authToken)
    {
        let jwtToken = authToken.substring("Bearer ".length);
        if(jwtToken)
        {
            console.log('JWT Token ',jwtToken);
            let verifiedUser = jwt.verify(jwtToken, config.TOKEN_SECRET);   // config.TOKEN_SECRET => 'secretKey'
            console.log('verified user ',verifiedUser);
            if (!verifiedUser) return res.status(401).send('Unauthorized request')

            req.user = verifiedUser; // user_id
            next();
        }
        else
        {
            res.status(401).json({
                message : 'Unauthorized'
            }).end();
        }


    }
    else
    {
        res.status(401).json({
            message : 'Unauthorized'
        }).end();
    }

}
module.exports = {
    verifyUserToken
};