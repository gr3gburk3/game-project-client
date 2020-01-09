'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./board/events')
const userEvents = require('./board/user-events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.addHandlers()
  userEvents.addHandlers()
  $('#change-password').hide()
  $('#logout').hide()
  $('#sign-in').show()
  $('#board').hide()
})
