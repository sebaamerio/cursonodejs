module.exports = (scheme) => {
  return (req, res, next) => {
    let result = scheme.validate(req.body);

    if (result.error) {
      next(result.error); // envia el error al controlador
    } else {
      next(); // continua con la ejecucion del controlador
    }
  };
};
