const jwt = require("jsonwebtoken")

const {
    ACCESS_TOKEN_EXPIRATION,
    REFRESH_TOKEN_EXPIRATION,
    JWT_SECRET_KEY,
} = require("../common/app-constant");

exports.signAccessToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET_KEY, {
        expiresIn: ACCESS_TOKEN_EXPIRATION,
    });
};



exports.signRefreshToken = (user) => {
    return jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
        expiresIn: REFRESH_TOKEN_EXPIRATION,
    });
};

exports.verifyRefreshToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return reject("Invalid refresh token");
            }
            resolve(decoded.id);
        });
    });
};

exports.checkAuthorities = (requiredRoles) => {
    return (req, res, next) => {
        // extract token
        let token;
    };
};

exports.extractUserIdFromToken = (token) => {
    if (!token) return null;
    const tokenArr = token.split(" ");
    if (tokenArr.length === 1 || tokenArr[0] !== "Bearer") return null;
    const verify = jwt.verify(tokenArr[1], JWT_SECRET_KEY);
    return verify.id;
};