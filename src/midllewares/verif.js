const jwt = require("jsonwebtoken");

const verif_Token = (req, res, next) => {
  const token = req.headers["authorization"].split(' ')[1];

  if (!token) {
    return res.status(401).send({ message: "No token provided" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
};

module.exports = {
  verif_Token,
};