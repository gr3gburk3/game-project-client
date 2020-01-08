'use strict'
const store = require('../store')
let player = 'X'
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
  console.log(!($(event.target).hasClass('clicked')))
  /* in if statement, if the contents of the parentheses is not true (!true)
    no further code will run, in this case no text can be added if an element
    has a class of clicked.
  */
  if (!($(event.target).hasClass('clicked'))) {
    $(event.target).addClass('clicked')

    $(event.target).text(player)
    if (player === 'X') {
      player = 'O'
      $('#message').text('Player O, You are up!')
    } else {
      player = 'X'
      $('#message').text('Player X, You are up!')
    }
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
