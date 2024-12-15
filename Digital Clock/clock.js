let hrsElement = document.querySelector(".hours");
let minsElement = document.querySelector(".minutes");
let secsElement = document.querySelector(".seconds");

function updatetime() {
    let time = new Date();

    // Extract hours, minutes, and seconds
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    // Add leading zeros
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    // Update the DOM
    hrsElement.textContent = hrs;
    minsElement.textContent = mins;
    secsElement.textContent = secs;
}

// Call the function immediately and then every second
updatetime();
setInterval(updatetime, 1000);
