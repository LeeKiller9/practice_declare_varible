let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'

function show_variable() {
    document.write('i = ' + i)
    document.write('<br/>')
    document.write('f = ' + f)
    document.write('<br/>')
    document.write('b = ' + b)
    document.write('<br/>')
    document.write('s = ' + s)
}

let width = 20
let height = 10
let area = width * height

function show_area() {
    document.write('width = ' + width)
    document.write('<br/>')
    document.write('height = ' + height)
    document.write('<br/>')
    document.write('Area = ' + area)
}

function check_number() {
    input_a = prompt("Input first number")
    input_c = prompt("Input second number")
    let a = parseInt(input_a);
    let c = parseInt(input_c);
    let d = a % c
    if (d == 0) {
        alert("Reminder is " + d + " => " +  a + " is multiple of " + c)
    } else {
        alert("Reminder is " + d + " => " +  a + " is not multiple of " + c)
    }
}

