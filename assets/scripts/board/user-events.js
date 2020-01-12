'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const gameapi = require('./gameapi')

const onSignUp = function () {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function () {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function () {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onLogout = function () {
  event.preventDefault()
  api.logout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}
const onCreateGame = function () {
  event.preventDefault()
  $('#board').show()
  gameapi.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
const onRetrieveGames = function (evt, response) {
  console.log(evt, response)
  evt.preventDefault()
  gameapi.retrieveGames()
    .then(ui.retrieveGamesSuccess)
    .catch(ui.retrieveGamesFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
  $('#reset-button').on('click', onCreateGame)
  // $('#sign-in').on('submit', onRetrieveGames)
  $(window).on('app-login', onRetrieveGames)
}

module.exports = {
  addHandlers
}
