'use strict';

module.exports = (err, req, ress, next) => {

  const error = err.message ? err.message : err;
  ress.status(500).json({ 500: `${error}` })
}