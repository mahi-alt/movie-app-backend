/* fetchuser is a middleware which is used to authenticate users.
It is used in all the api calls to backend where user authentication is mandatory.
*/

const jwt = require('jsonwebtoken');



const JWT_SECRET = "It is all a part of the process."

const fetchuser = (req, res, next) =>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Invalid Authentication."})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Invalid Authentication."})
    }
}

module.exports = fetchuser;