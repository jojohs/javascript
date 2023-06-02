const clock = document.querySelector('.clock')

function getTime() {
    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    const hours = `${hour < 10 ? `0${hour}` : `${hour}`}`
    const nimutes = `${min < 10 ? `0${min}` : `${min}`}`
    const seconds = `${sec < 10 ? `0${sec}` : `${sec}`}`

    clock.innerHTML = `${hours}:${nimutes}:${seconds}`
}

function init() {
    getTime()
    setInterval(getTime, 1000)
}

init()
