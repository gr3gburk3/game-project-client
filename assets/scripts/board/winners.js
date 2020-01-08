'use strict'

const store = require('../store')
// const events = require('./events')

// store.player = player
let gameOver = false
const checkWinner = () => {
  // horizontal win conditions
  if (store.board[0] !== undefined && store.board[0] === store.board[1] && store.board[0] === store.board[2]) {
    gameOver = true
    console.log(gameOver)
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[3] !== undefined && store.board[3] === store.board[4] && store.board[3] === store.board[5]) {
    gameOver = true
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[6] !== undefined && store.board[6] === store.board[7] && store.board[6] === store.board[8]) {
    gameOver = true
    $('#alert').text(`${store.player} Wins!`)
    // vertical win conditions
  } else if (store.board[0] !== undefined && store.board[0] === store.board[3] && store.board[0] === store.board[6]) {
    gameOver = true
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[1] !== undefined && store.board[1] === store.board[4] && store.board[1] === store.board[7]) {
    gameOver = true
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[2] !== undefined && store.board[2] === store.board[5] && store.board[2] === store.board[8]) {
    gameOver = true
    $('#alert').text(`${store.player} Wins!`)
    // diagonal win conditions
  } else if (store.board[0] !== undefined && store.board[0] === store.board[4] && store.board[0] === store.board[8]) {
    gameOver = true
    $('#alert').text(`${store.player} Wins!`)
  } else if (store.board[6] !== undefined && store.board[6] === store.board[4] && store.board[6] === store.board[2]) {
    gameOver = true
    console.log(gameOver)
    $('#alert').text(`${store.player} Wins!`)
  }
}
const checkDraw = () => {
  if (store.board.includes(undefined) === false) {
    gameOver = true
    console.log(gameOver)
    $('#alert').text('Game is a draw!')
  }
}


module.exports = {
  checkWinner,
  checkDraw,
  gameOver
}
