let bruh = "bruh.";
let text = "";
function exit(){
    document.getElementById('txt').innerHTML = "Bruh.";
    sleep(4000);
    document.getElementById('txt').innerHTML = "Can You Math?";
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}