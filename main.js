const canvas = document.querySelector('#canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const context = canvas.getContext('2d')
let x = 0
let y = 0
let speed = 5
let mod = 0
let degree = 0
setInterval(function () {
  draw()
}, 30)
const image = document.querySelector('#source')

image.addEventListener('load', () => {
  context.drawImage(image, x, y, 100, 100)
})

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  // x += (speed * mod) * Math.cos(Math.PI / 180 * degree)
  // y += (speed * mod) * Math.sin(Math.PI / 180 * degree)
  context.save()
  context.translate(x, y)
  // context.rotate(Math.PI / 180 * degree)
  context.drawImage(image, x, y, 100, 100)   // (image, -(image.width / 2), -(image.height / 2))
  context.restore()
}

// document.addEventListener('keyup', function (event) {
//   if (event.keyCode === 87 || event.keyCode === 83) {
//     mod = 0
//   }
// })

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 87) {
    mod = 1
    x += (speed * mod)
    // y += (speed * mod)// * Math.sin(Math.PI / 180 * degree)
  }
  if (event.keyCode === 83) {
    mod = 1
    // x += (speed * mod)
    y += (speed * mod)// * Math.sin(Math.PI / 180 * degree)
  }
  if (event.keyCode === 65) {
    degree = 5
    // mod = -1
    x += (speed * mod) * Math.cos(Math.PI / 180 * degree)
    // context.rotate((180 / Math.PI) * (Math.PI / degree))
    context.rotate(Math.PI / 180 * degree)
  }
  if (event.keyCode === 68) {
    degree = 5
    // mod = 1
    x += (speed * mod) * Math.cos(Math.PI / 180 * degree)
    context.rotate(Math.PI / 180 * degree)
  }
})
