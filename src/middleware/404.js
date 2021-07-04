'use strict';

'use strict'
module.exports = (req, res, next) => {
  res.status(404).json({ 404: 'Not-Found' })
}