const jwt = require('jsonwebtoken')

const userMiddleware = (req,res,next) => {
    const token = req.headers.authorization    
    
    if(!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const user = jwt.verify(token.split(' ')[1], process.env.JWT_KEY)        
        req.email = user.email
        next()
    }
    catch(err) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}

module.exports = userMiddleware