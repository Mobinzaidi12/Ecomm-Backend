const jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

function verifyToken(req, res, next) {
  let token = req.headers["authorization"];

  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).send({ result: "Please enter correct token" });
      } else {
        next();
      }
    });
  } else {
    res.status(402).send({ result: "Please enter token" });
  }
}

module.exports = verifyToken;
