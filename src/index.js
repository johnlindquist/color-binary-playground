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
    switch (event.target.id) {
      case "red":
        red = event.target.value << 16
        break;

      case "green":
        green = event.target.value << 8
        break;

      case "blue":
        blue = event.target.value
        break;

      default:
        red = green = blue = 0;
        break;
    }
    let color = toHex(red | green | blue)
    hex.value = color

    document.body.style.backgroundColor = color

  })
}


