'use strict'

// const player = x
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
  $(event.target).text('x')
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
