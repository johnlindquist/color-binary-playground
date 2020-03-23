let blue = 0x0000ff
let green = 0x00ff00
let red = 0xff0000

console.log(255 === 0xff)

let toHex = color =>
  `#${color.toString(16).padStart(6, "0")}`

document.body.style.backgroundColor = toHex(red)



