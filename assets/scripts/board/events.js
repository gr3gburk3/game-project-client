'use strict'
const playerX = true
const gameOver = false

const playZero = function () {
  $('#zero').on('click', changeValue)
  console.log('O')
}
const playOne = function () {
  $('#one').on('click', changeValue)
}
const playTwo = function () {
  $('#two').on('click', changeValue)
  console.log('X')
}
const playThree = function () {
  $('#three').on('click', changeValue)
}
const playFour = function () {
  $('four').on('click', changeValue)
}
const playFive = function () {
  $('five').on('click', changeValue)
}
const playSix = function () {
  $('six').on('click', changeValue)
}
const playSeven = function () {
  $('seven').on('click', changeValue)
}
const playEight = function () {
  $('four').on('click', changeValue)
}

const changeValue = () => {
  if (playerX === true && !gameOver === false) {
    $(`#${this.id}`).text('X')
  } else {
    $(`#${this.id}`).text('O')
  }
/*
  const playOne = function () {
    $('#one').on('click', changeOne)
  }

  const changeOne = (event) => {
    $(`#one`).text('x')
  }
*/
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
}
