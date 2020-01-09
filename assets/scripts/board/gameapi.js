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
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data:
    {'game': {
      'cell': {
        'index': data,
        'value': store.player
      },
      'over': store.gameOver
    }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
