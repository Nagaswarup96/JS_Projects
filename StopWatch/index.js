const conta = document.querySelector(".Container");
const start = document.querySelector(".start");
const stopt = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const time = document.querySelector(".time");


let hour = 0;
let minutes = 0;
let seconds = 0;

let intervalID = '';

function stringTime() {

    if (seconds > 59) {
        if (minutes > 60) {
            hour += 1;
            minutes = 0;

        } else {
            minutes += 1;
            seconds = 0;
        }
    } else {
        seconds += 1;

    }

    time.innerHTML = `${strings(hour)}:${strings(minutes)}:${strings(seconds)}`;

}

function strings(arg) {

    let value = arg.toString();
    
    if (value.length < 2) {
        value = "0" + value;
    } else {
        value = value;
    }
    return value;
}

start.addEventListener('click', () => {
    intervalID = setInterval(stringTime, 1000);
});

stopt.addEventListener('click', () => {
    clearInterval(intervalID);
});

reset.addEventListener('click', () => {
    hour = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(intervalID);
    time.innerHTML = `00:00:00`;
});
