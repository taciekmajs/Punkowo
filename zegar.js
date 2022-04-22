function zegarJS() {
    var data = new Date();
    var godziny = data.getHours();
    var minuty = data.getMinutes();
    var sekundy = data.getSeconds();

    if (godziny.toString().length == 1)godziny = "0"+godziny;
    if (minuty.toString().length == 1)minuty = "0"+minuty;
    if (sekundy.toString().length == 1)sekundy = "0"+sekundy;

    var godzina = godziny + ":" + minuty + ":" + sekundy;

    document.getElementById("zegarJS").innerHTML = godzina;
    setInterval(zegarJS, 1000);
}