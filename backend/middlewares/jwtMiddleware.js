const jwt = require('jsonwebtoken')
const key = 'abdullahshaikh03126600460'
const authMiddleware = (req, res, next)=>{

    try {
        
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message: "token is empty"})
        }

        const userData = jwt.verify(token,key)
        req.user = userData

        
    next()
    } catch (error) {
        console.log("JWT Middleware Error: ", error);
        return res.status(403).json({ message: "Invalid or Expired Token" });
        
    }

}

module.exports = {
    authMiddleware
}