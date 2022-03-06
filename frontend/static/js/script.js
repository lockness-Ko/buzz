let cpu = document.getElementById("cpu");
let mem = document.getElementById("mem");
let uptime = document.getElementById("uptime");
let load = document.getElementById("load");

let apiGet = (url, callback) => {
    fetch(url).then((x) => {
        return x.text()
    }).then((y) => callback(y));
}

let roundUp = (num, precision) => {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

let statsLoop = () => {
    apiGet("/api/stats/cpu", (text) => {
        cpu.textContent = `CPU: ${roundUp(parseFloat(text),2)}%`;
    })

    apiGet("/api/stats/mem", (text) => {
        mem.textContent = `${text}`;
    })

    apiGet("/api/stats/uptime", (text) => {
        uptime.textContent = `${text}`;
    })

    setTimeout(() => {
        window.requestAnimationFrame(statsLoop)
    }, 1000);
}

window.onload = () => {
    statsLoop();
}