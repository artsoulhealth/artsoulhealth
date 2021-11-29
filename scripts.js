$(document).ready(function () {
let quotes = ["A deep dive into connecting with others and self-reflection.", 
"A collaboration of play, art, connection. An easy and fun way to move, relax, connect in, and connect out.", 
"The workshop uses a combination of physical and visual artistry exercises as a tool to help us learn more about our emotions. It helps us understand how to identify and release emotions and gives you a tool to grow and move forward."]

let counter = 0
var elem = $("#quote");

function change() {
    elem.fadeOut(function(){
        elem.html(quotes[counter]);
        counter++;
        if(counter >= quotes.length) { counter = 0; }
        elem.fadeIn();
    });
}

change()
setInterval(change, 7000)
})