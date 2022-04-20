let total = 0

document.querySelector('#first').addEventListener('click', makeZero)
document.querySelector('#second').addEventListener('click', addNine)
document.querySelector('#third').addEventListener('click', minusThree)
document.querySelector('#fourth').addEventListener('click', addTwo)
document.querySelector('#fifth').addEventListener('click', addSix)


function makeZero(){
  total = 0
  document.querySelector('#resultPlace').innerText = total
}
function addNine(){
  total = total + 9
  document.querySelector('#resultPlace').innerText = total
}
function minusThree(){
  total = total - 3
  document.querySelector('#resultPlace').innerText = total
}
function addTwo(){
  total = total + 2
  document.querySelector('#resultPlace').innerText = total
}
function addSix(){
  total = total + 6
  document.querySelector('#resultPlace').innerText = total
}













































/*
let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#theExtra').addEventListener('click', extra)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function extra(){
  total = total + 5
  document.querySelector('#placeToPutResult').innerHTML = total
}
*/