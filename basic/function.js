// 1. 함수

// 함수의 선언과 호출
function myFunc() {
    console.log('안녕하세요')
}

myFunc()

// 매개변수 Parameter
function printMessage(message) {
    console.log(message)
}

printMessage('하하하')
printMessage('Hello Javascript')

// 기본 매개변수
function showInfo(title, name = '스티브 잡스'){
    console.log(`${title} by ${name}`)
}

showInfo('게르리카','피카소')
showInfo('풍경')

//스코프 scope

let movie = '하하하'

function printMovie(){
    let myMovie = '생활의 발견'
    console.log(myMovie)
    console.log(movie)
}

printMovie()

// return
function plus(a,b) {
    return a+b
}

const result = plus(10,12)
console.log(result)

// 화살표 함수
const sum = add(5, 15)
console.log(sum)

function add(a, b) {
    return a + b
}

const minus = function(a,b) {
    return a - b
}

const sum2 = minus(20, 10)
console.log(sum2)

const minus2 = (a, b) => a - b
const sum3 = minus2(50,25)
console.log(sum3)