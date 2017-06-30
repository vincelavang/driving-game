const canvas = document.querySelector('#canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const context = canvas.getContext('2d')
let x = 0
let y = 0
let speed = 5
let mod = 0
setInterval(function () {
  draw()
}, 30)
const image = document.querySelector('#source')

image.addEventListener('load', () => {
  context.drawImage(image, x, y, 100, 100)
})

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.save()
  context.translate(x, y)
  context.drawImage(image, x, y, 100, 100)
  context.restore()
}

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 87) {
    mod = -1
    y += speed * mod
  }
  if (event.keyCode === 83) {
    mod = 1
    y += speed * mod
  }
  if (event.keyCode === 65) {
    mod = -1
    x += speed * mod
  }
  if (event.keyCode === 68) {
    mod = 1
    x += speed * mod
  }
})
