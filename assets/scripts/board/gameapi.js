'use strict'
const config = require('./../config')
const store = require('./../store.js')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.example.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data:
    {'game': {
      'cell': {
        'index': 0,
        'value': 'x'
      },
      'over': false
    }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
