'use strict'

const store = require('./../store.js')
const signUpSuccess = response => {
  $('#message').text('Sign-up Successful!')
  $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#change-password').show()
  // $('#logout').show()
}

const signUpFailure = () => {
  $('#message').text('Sign-up failed, please try again')
}
const signInSuccess = response => {
  $('#message').text('Sign-in Successful!')
  store.user = response.user
  console.log(store.user)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#logout').show()
}
const signInFailure = () => {
  $('#message').text('Try Again')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
