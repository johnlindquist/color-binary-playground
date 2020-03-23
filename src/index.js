let toHex = color =>
  `#${color.toString(16).padStart(6, "0")}`

let color = 0
let red = 0
let green = 0
let blue = 0
document.body.style.backgroundColor = toHex(color)


let inputs = document.querySelectorAll("input[type='range']")
let hex = document.querySelector("#hex")

for (let input of inputs) {
  input.addEventListener("input", event => {
    let id = event.target.id
    let value = event.target.value

    if (id === "red") red = value << 16
    if (id === "green") green = value << 8
    if (id === "blue") blue = value


    color = toHex(red | green | blue)

    hex.value = color

    document.body.style.backgroundColor = color

  })
}


