const clock = document.querySelector("h2#clock");

function sayClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

sayClock();
setInterval(sayClock, 1000);
// setTimeout(sayHello, 5000);
