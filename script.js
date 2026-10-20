const timeEL = document.getElementById("time");
const dateEL = document.getElementById("date");

function updateClock() {
    const now = new Date();

    timeEL.textContent = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

    dateEL.textContent = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    });

}

updateClock();
setInterval(updateClock, 1000);