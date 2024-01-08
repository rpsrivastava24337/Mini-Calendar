
let currentDate = document.getElementById("currentDate")
let currentDay = document.getElementById("currentDay")
let currentMonth = document.getElementById("currentMonth")
let currentYear = document.getElementById("currentYear")

setTimeout(() => {
    function update() {
let current =new Date()

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

currentDate.innerHTML=current.getDate()
currentDay.innerHTML=weekday[current.getDay()].slice(0,3)
currentMonth.innerHTML=month[current.getMonth()].slice(0,3)
currentYear.innerHTML=current.getFullYear()

}

    update()
}, 1000);