$(document).ready(function () {
let quotes = ["A deep dive into connecting with others and accessing self-reflection.", "Very insightful and eye-opening!",
"A great creative outlet for a team to learn together.", "Helped me realize to listen and hear others out before speaking.",
"Perfect alignment with our workplace values.", "I get tight and contracted when I am impatient. I learned how to release that impatience.",
"I feel more trust with my peers.", "Saundra and Sophia work together so well! The insights, the sharing of stories, the movement and art were all so meaningful.",
"The sharing portions after each exercise helped me to humanize the people I work with.", 
"Very professional and well-done!",
"I saw my ideas reflected in my visual art piece."
]

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