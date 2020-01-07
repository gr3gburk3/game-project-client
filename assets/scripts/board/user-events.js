'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
// const ui = require('./ui')
const api = require('./api')

const onSignUp = function () {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
  // .then(ui.signUpSuccess)
  // .catch(ui.signUpFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#logout').on('submit', onLogout)
}

module.exports = {
  addHandlers
}