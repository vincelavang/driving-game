document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#canvas')
  const context = canvas.getContext('2d')
  let x = 0
  let y = 0
  const image = document.querySelector('#source')
  context.drawImage(image, x, y)
})
