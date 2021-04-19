// Import dependancies
const express = require('express')
const cors = require('cors')

// Setup express server
const app = express()

// Setup port
app.set('port', (process.env.PORT || 3001))

// Parse application/json
app.use(express.json())

// Setup cors
app.use(cors())

// Import routes
const getStatus = require('./endpoints/status')
const getInfo = require('./endpoints/info')

// Setup routes
app.get('/api/status', getStatus)
app.get('/api/info', getInfo)

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Listen on port
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})

// Export so we can test
module.exports = app