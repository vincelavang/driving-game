document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#canvas')
  const context = canvas.getContext('2d')
  let x = 0
  let y = 0
  const image = document.querySelector('#source')
  image.addEventListener('load', () => {
    context.drawImage(image, x, y, 100, 100)
  })
})
