'use strict'

const store = require('../store')
const signUpSuccess = response => {
  $('#message').text('Sign-up Successful!')
  $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#change-password').show()
  // $('#logout').show()
}

const signUpFailure = () => {
  $('#message').text('Sign-up failed, please try again amigo')
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
  $('#message').text('Try Again Friend')
}
const changePasswordSuccess = () => {
  $('#message').text('Password Changed!')
}

const changePasswordFailure = () => {
  $('#message').text('Try Again')
}
const logoutSuccess = () => {
  $('#message').text('See you next time!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#logout').hide()
}

const logoutFailure = () => {
  $('#message').text('Unsuccessful Log-Out')
}
/* const playerTurn = () => {
  if (store.player === 'X') {
    $('#message').text('Player X, You are up!')
  }
}
*/
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logoutSuccess,
  logoutFailure
  // playerTurn
}
