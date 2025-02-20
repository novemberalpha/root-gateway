class ResponseError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
  }

  static clone(code, errObj) {
    if (!(errObj instanceof Error)) return null;
    const retVal = new ResponseError(code, errObj.message);
    Object.keys(errObj).forEach((key) => {
      retVal[key] = errObj[key];
    });
    return retVal;
  }

  sendBy(res) {
    res.status(this.code).send({ code: this.code, message: this.message });
    return this;
  }
}

function errorMessage(code, defaultMessage) {
  return (message) => {
    if (message instanceof ResponseError) return message;
    return message instanceof Error
      ? ResponseError.clone(code, message)
      : new ResponseError(code, message || defaultMessage);
  };
}

module.exports = {
  notFound: errorMessage(404, 'Object not found'),
  invalid: errorMessage(400, 'Invalid input'),
  unauthorized: errorMessage(401, 'Unauthorized'),
  serverError: errorMessage(500, 'Internal error'),
  ResponseError,
};
