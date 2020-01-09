'use strict'

const store = require('../store')
// const events = require('./events')

// store.player = player
store.gameOver = false
const checkWinner = () => {
  // horizontal win conditions
  if (store.board[0] !== undefined && store.board[0] === store.board[1] && store.board[0] === store.board[2]) {
    store.gameOver = true
    console.log(store.gameOver)
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[3] !== undefined && store.board[3] === store.board[4] && store.board[3] === store.board[5]) {
    store.gameOver = true
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[6] !== undefined && store.board[6] === store.board[7] && store.board[6] === store.board[8]) {
    store.gameOver = true
    $('#alert').text(`${store.player} Wins!`)
    // vertical win conditions
  } else if (store.board[0] !== undefined && store.board[0] === store.board[3] && store.board[0] === store.board[6]) {
    store.gameOver = true
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[1] !== undefined && store.board[1] === store.board[4] && store.board[1] === store.board[7]) {
    store.gameOver = true
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[2] !== undefined && store.board[2] === store.board[5] && store.board[2] === store.board[8]) {
    store.gameOver = true
    $('#alert').text(`${store.player} Wins!`)
    // diagonal win conditions
  } else if (store.board[0] !== undefined && store.board[0] === store.board[4] && store.board[0] === store.board[8]) {
    store.gameOver = true
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[6] !== undefined && store.board[6] === store.board[4] && store.board[6] === store.board[2]) {
    store.gameOver = true
    console.log(store.gameOver)
    $('#alert').text(`${store.player} Wins!`)
  }
}
const checkDraw = () => {
  if (store.gameOver === false) {
    if (store.board.includes(undefined) === false) {
      store.gameOver = true
      console.log(store.gameOver)
      $('#alert').text('Game is a draw!')
    }
  }
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
