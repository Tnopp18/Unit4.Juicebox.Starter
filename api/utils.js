const jwt = require('jsonwebtoken');

function requireUser(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.sendStatus(401);
  }
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }catch(err) {
    return res.sendStatus(401);
  };
}

module.exports = {
  requireUser
}