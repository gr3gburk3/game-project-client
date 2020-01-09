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
const onUpdateGame = (event) => {
  event.preventDefault()
  const data = event.target.id
  console.log(data)
  gameapi.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
  $('#reset-button').on('click', onCreateGame)
  $('.gameBox').on('click', onUpdateGame)
}

module.exports = {
  addHandlers
}
