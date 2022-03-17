const { join } = require('path')
const pageNotFound = (req, res) => res.sendFile(join(__dirname, '..', '..', '..', 'view', 'html', '404.html'))
module.exports = { pageNotFound }