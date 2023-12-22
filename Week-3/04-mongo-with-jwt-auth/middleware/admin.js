const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const tokenStr = req.headers["authorization"];

        // Check if the Authorization header is present
        if (!tokenStr) {
            return res.status(401).send({
                success: false,
                message: "Authorization header missing",
            });
        }

        // Split the token string and extract the actual token
        const token = tokenStr.split(" ");

        // Verify the token
        if (jwt.verify(token[1], jwtPassword)) {
            // Token is valid, proceed to the next middleware or route handler
            next();
        } else {
            // Token is invalid
            res.status(401).send({
                success: false,
                message: "Invalid token",
            });
        }
    } catch (err) {
        // Handle any unexpected errors
        console.error(err);
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = adminMiddleware;
