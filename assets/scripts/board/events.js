'use strict'
const store = require('../store')
const winners = require('./winners')
const gameapi = require('./gameapi')
const ui = require('./ui')
store.player = 'X'
const board = new Array(9)
// [,,,,,,,,]
store.board = board
// store.player = player
// const gameOver = false

const playZero = function () {
  $('#0').on('click', changeText)
}
const playOne = function () {
  $('#1').on('click', changeText)
}
const playTwo = function () {
  $('#2').on('click', changeText)
}
const playThree = function () {
  $('#3').on('click', changeText)
}
const playFour = function () {
  $('#4').on('click', changeText)
}
const playFive = function () {
  $('#5').on('click', changeText)
}
const playSix = function () {
  $('#6').on('click', changeText)
}
const playSeven = function () {
  $('#7').on('click', changeText)
}
const playEight = function () {
  $('#8').on('click', changeText)
}
const changeText = (event) => {
  if (store.gameOver) {
    $('#alert').text('Game Over')
  } else {
    console.log(event.target.id)
    if (!($(event.target).hasClass('clicked'))) { // if the element has not been clicked,
      $('#alert').text('')
      store.board[event.target.id] = store.player
      console.log(store.board)
      winners.checkWinner()
      winners.checkDraw()
      winners.noClick()
      $(event.target).addClass('clicked') // add the class clicked
      $(event.target).text(store.player) // show the current player in the element
      const data = event.target.id
      console.log(data)
      gameapi.updateGame(data)
        .then(ui.updateGameSuccess)
        .catch(ui.updateGameFailure)
      if (store.player === 'X') { // switch the player
        store.player = 'O'
        $('#player').text('Player O, You are up!')
      } else {
        store.player = 'X'
        $('#player').text('Player X, You are up!')
      }
    } else {
      $('#alert').text('Try another square!')
    }
  }
}
const resetBoard = () => {
  console.log('test')
  store.board = new Array(9)
  store.player = 'X'
  store.gameOver = false
  $('.reset').text('In Play').removeClass('clicked')
}
const resetBoardSuccess = () => {
  $('#reset-button').on('click', resetBoard)
}

const addHandlers = () => {
  playZero()
  playOne()
  playTwo()
  playThree()
  playFour()
  playFive()
  playSix()
  playSeven()
  playEight()
  resetBoardSuccess()
}

module.exports = {
  addHandlers,
  resetBoard
}
