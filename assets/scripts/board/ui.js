'use strict'

const store = require('../store')
const gameApi = require('./gameapi')
// const userEvents = require('./user-events')

const signUpSuccess = (response) => {
  console.log('hello')
  $('#message').text('Sign-up Successful!')
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#change-password').show()
  // $('#logout').show()
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#message').show().text('Sign-up failed, please try again amigo')
  $('form').trigger('reset')
}
const signInSuccess = (response) => {
  $('#message').show()
  $('#message').text('Sign-in Successful!')
  store.user = response.user
  console.log(store.user)
  console.log(gameApi.retrieveGames)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#logout').show()
  // $('#player').show()
  $('#reset-button').show()
  $('#alert').text('Welcome')
  $(window).trigger('app-login', response)
  $('form').trigger('reset')
  $('#games-played').show()
}
const signInFailure = () => {
  $('#message').show().text('Try Again Friend')
}
const changePasswordSuccess = () => {
  $('#message').text('Password Changed!')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#message').text('Try Again')
  $('form').trigger('reset')
  $('#message').show()
}
const logoutSuccess = () => {
  $('#message').text('See you next time!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#logout').hide()
  $('#board').hide()
  $('#reset-button').hide()
  $('#player').hide()
  $('#alert').text('')
  $(window).trigger('app-logout')
  $('#games-played').hide()
  $('#message').hide()
  // $('#alert').hide()
}

const logoutFailure = () => {
  $('#message').text('Unsuccessful Log-Out')
}

const createGameSuccess = (response) => {
  $('#alert').text('Game Created!')
  store.game = response.game
  $('#player').show()
}

const createGameFailure = (response) => {
  $('#alert').text('Try Again!')
}

const updateGameSuccess = (data) => {
  $('#alert').text('Game Updated!')
}

const updateGameFailure = (data) => {
  $('#alert').text('Update Failed')
}

const retrieveGamesSuccess = (data) => {
  store.games = data.games
  $('#games-played').text(`User has played ${store.games.length} games`)
  // $('#alert').text()
}
const retrieveGamesFailure = (data) => {
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logoutSuccess,
  logoutFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  retrieveGamesSuccess,
  retrieveGamesFailure
}
