const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {

    // Check to see if the header of the request has any token assigned to it.
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(401).json({ msg: 'No token provided, authorization denied.'} );
    }

    try{
        // If token exist, then decode the jwt.
        const decodedToken = jwt.verify(token, config.get('jwtSecret'));
        
        // after decoding the token, grab the token's payload and put it to a property on the req object.
        req.user = decodedToken.user;
        next();

    } catch(error){
        res.status(401).json({ msg: 'Token is not valid.'} );
    }

}

module.exports = auth;