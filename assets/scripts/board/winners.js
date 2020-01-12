'use strict'

const store = require('../store')
// const events = require('./events')

// store.player = player
store.gameOver = false
const checkWinner = () => {
  // horizontal win conditions
  return (store.board[0] !== undefined && store.board[0] === store.board[1] && store.board[0] === store.board[2]) ||
    (store.board[3] !== undefined && store.board[3] === store.board[4] && store.board[3] === store.board[5]) ||
    (store.board[6] !== undefined && store.board[6] === store.board[7] && store.board[6] === store.board[8]) ||
    // vertical winners
    (store.board[0] !== undefined && store.board[0] === store.board[3] && store.board[0] === store.board[6]) ||
    (store.board[1] !== undefined && store.board[1] === store.board[4] && store.board[1] === store.board[7]) ||
    (store.board[2] !== undefined && store.board[2] === store.board[5] && store.board[2] === store.board[8]) ||
    // diagonal winners
    (store.board[0] !== undefined && store.board[0] === store.board[4] && store.board[0] === store.board[8]) ||
    (store.board[6] !== undefined && store.board[6] === store.board[4] && store.board[6] === store.board[2])
}

const checkDraw = () => {
  return !store.board.includes(undefined)
}

const noClick = () => {
  if (store.gameOver === true) {
    $('#board').addClass('clicked')
  }
}
module.exports = {
  checkWinner,
  checkDraw,
  noClick
}
