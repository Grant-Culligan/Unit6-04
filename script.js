let firstbase = 0
let secondbase = 0
let height = 0
let area = 0

document.getElementById('calc').addEventListener('click', calculate)

function calculate () {
  firstbase = document.getElementById('firstb').value
  secondbase = document.getElementById('secb').value
  height = document.getElementById('height').value

  area = parseInt(firstbase)
  area = parseInt(secondbase)
  area = parseInt(height)

  area = firstbase + secondbase
  area = area / 2
  area = area * height

  alert(area)
}
