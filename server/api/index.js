const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/languages', require('./languages'))
router.use('/phrases', require('./phrases'))
router.use('/reviews', require('./reviews'))
router.use('/tones', require('./tones'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
