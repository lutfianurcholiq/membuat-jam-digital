const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');

function clock() {
    const date = new Date();
    
    const getHours = date.getHours();
    const getMinutes = date.getMinutes();
    const getSecond = date.getSeconds()
    
    hours.textContent = getHours;
    minutes.textContent = getMinutes;
    seconds.textContent = getSecond;

    setTimeout(clock, 1000);
}

clock();