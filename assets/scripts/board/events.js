'use strict'
// const gameboard = ['', '', '', '', '', '', '', '', '']
// let playerX = true
// let playerO = false

const playZero = function () {
  $('#zero').on('click', changeText)
}

const changeText = (event) => {
  $(`#zero`).text('x')
}

const addHandlers = () => {
  playZero()
}

module.exports = {
  addHandlers
}
