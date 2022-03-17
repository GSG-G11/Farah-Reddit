const { join } = require('path')
const severError = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json(err.message)
    } else {
        res.sendFile(join(__dirname, '..', '..', '..', 'view', 'html', '500.html'))
    }
}
module.exports = { severError };