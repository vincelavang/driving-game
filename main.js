const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')
let x = 0
let y = 0
let speed = 1
let mod = 0
setInterval(function () {
  draw()
}, 30)
const image = document.querySelector('#source')

image.addEventListener('load', () => {
  context.drawImage(image, x, y, 100, 100)
})

function draw() {
  x += speed * mod
  y += speed * mod
  context.save()
  context.translate(x, y)
  context.drawImage(image, x, y, 100, 100)
  context.restore()
}
