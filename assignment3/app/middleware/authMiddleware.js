import {JWT_SECRET} from "./app/config/config.js";

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Access Denied: No Token Provided!');
    }

    try {
        const secret = JWT_SECRET || 'secretKey';
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send('Invalid Token');
    }
};

module.exports = verifyToken;