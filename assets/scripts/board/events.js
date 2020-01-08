'use strict'
const store = require('../store')
const winners = require('./winners')
let player = 'X'
const board = new Array(9)
// [,,,,,,,,]
store.board = board
store.player = player
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
  console.log(event.target.id)
  if (!($(event.target).hasClass('clicked'))) { // if the element has not been clicked,
    $('#alert').text('')
    board[event.target.id] = player
    console.log(board)
    winners.checkWinner()
    $(event.target).addClass('clicked') // add the class clicked
    $(event.target).text(player) // show the current player in the element
    if (player === 'X') { // switch the player
      player = 'O'
      $('#player').text('Player O, You are up!')
    } else {
      player = 'X'
      $('#player').text('Player X, You are up!')
    }
  } else {
    $('#alert').text('Try another square!')
  }
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
}

module.exports = {
  addHandlers
}
