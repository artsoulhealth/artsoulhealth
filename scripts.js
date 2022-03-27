$(document).ready(function () {
let quotes = ["With Art-Soul-Health I was able to take a deep dive into connecting with others.", "Very insightful and eye-opening!",
"A great creative outlet for a team to learn together.", "Art-Soul-Health taught me to listen and hear others out before speaking.",
"Perfect alignment with our workplace values.", "I get tight and contracted when I am impatient. Saundra taught me how to release that impatience.",
"I feel more trust with my peers.", "Saundra and Sophia work together so well! The insights, the sharing of stories, the movement, and the art were all so meaningful.",
"The sharing portions after each exercise helped me to humanize the people I work with.", 
"Very professional and well-done!",
"I saw my ideas reflected in my visual art piece."
]

let names = ['Amanda', 'Joe', 'Susan', "Jeffery", 'Pablo', 'Jennifer', 'Bobby', 'Elena', 'Anne', 'Will', 'Hannah']

let counter = 0
var elem = $("#quote");
var caption = $('#quote-caption');

function change() {
    elem.fadeOut(function(){
        elem.html(quotes[counter]);
        caption.html(`${names[counter]}, workshop participant`);
        counter++;
        if(counter >= quotes.length) { counter = 0; }
        elem.fadeIn();
    });
}

change()
setInterval(change, 7000)

})

const checkpoint = 100

window.addEventListener("scroll", () => {
    const position = window.pageYOffset;
    let opacity;

    if (position <= checkpoint) {
        opacity = 1
    } else {
        opacity = 0.2
    }

    document.querySelector("#main-image").style.opacity = opacity
})

document.addEventListener('DOMContentLoaded', function() { 
document.querySelector("#learn-more").addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });

})
})