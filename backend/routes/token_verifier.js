var express = require('express');
var router = express.Router();

function verifyToken(req,res,next)
{
    return res.status(200).json({message:"Valid"});
}
router.post('/verifyToken',verifyToken);

module.exports = router;