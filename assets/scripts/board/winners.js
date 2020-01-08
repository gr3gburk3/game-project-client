'use strict'

const store = require('../store')
// const events = require('./events')

// store.player = player

const checkWinner = () => {
  if (store.board[0] !== undefined && store.board[0] === store.board[1] && store.board[0] === store.board[2]) {
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[3] !== undefined && store.board[3] === store.board[4] && store.board[3] === store.board[5]) {
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[6] !== undefined && store.board[6] === store.board[7] && store.board[6] === store.board[8]) {
    $('#alert').text(`${store.player} Wins!`)
    // horizontal win conditions
  } else if (store.board[0] !== undefined && store.board[0] === store.board[3] && store.board[0] === store.board[6]) {
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[1] !== undefined && store.board[1] === store.board[4] && store.board[1] === store.board[7]) {
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[2] !== undefined && store.board[2] === store.board[5] && store.board[2] === store.board[8]) {
    $('#alert').text(`${store.player} Wins!`)
    // vertical win conditions
  } else if (store.board[0] !== undefined && store.board[0] === store.board[4] && store.board[0] === store.board[8]) {
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[6] !== undefined && store.board[6] === store.board[7] && store.board[6] === store.board[8]) {
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[6] !== undefined && store.board[6] === store.board[4] && store.board[6] === store.board[2]) {
    $('#alert').text(`${store.player} Wins!`)
  }
}
module.exports = {
  checkWinner
}
