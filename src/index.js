let toHex = color =>
  `#${color.toString(16).padStart(6, "0")}`

let inputs = document.querySelectorAll("input[type='range']")
let hex = document.querySelector("#hex")

let red = 0
let green = 0
let blue = 0

let color = 0

for (let input of inputs) {
  input.addEventListener("input", event => {
    let id = event.target.id
    let value = parseInt(event.target.value, 10)

    if (id === "red") red = value << 16
    if (id === "green") green = value << 8
    if (id === "blue") blue = value

    color = red | green | blue

    document.body.style.backgroundColor = toHex(color)
    hex.value = toHex(color)
  })

}



document.body.style.backgroundColor = toHex(color)
hex.value = toHex(color)




