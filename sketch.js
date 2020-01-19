function setup () {
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw () {
  background(250)

  translate(50, 0, 0)
  push()
  rotateZ(frameCount * 0.01)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  torus(90, 30)
  pop()
}
