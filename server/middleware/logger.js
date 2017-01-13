module.exports = (req, res, next) => {
  console.log(`Petición recibida: ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
     console.log(`Body: ${JSON.stringify(req.body)}`);
  }
  next();
};