$(document).ready(function () {
    // Quote rotation functionality
    const quotes = [
        "With Art-Soul-Health I was able to take a deep dive into connecting with others.",
        "Very insightful and eye-opening!",
        "A great creative outlet for a team to learn together.",
        "Art-Soul-Health taught me to listen and hear others out before speaking.",
        "Perfect alignment with our workplace values.",
        "I get tight and contracted when I am impatient. Saundra taught me how to release that impatience.",
        "I feel more trust with my peers.",
        "Saundra and Sophia work together so well! The insights, the sharing of stories, the movement, and the art were all so meaningful.",
        "The sharing portions after each exercise helped me to humanize the people I work with.",
        "Very professional and well-done!",
        "I saw my ideas reflected in my visual art piece."
    ];

    const names = [
        'Amanda', 'Joe', 'Susan', "Jeffery", 'Pablo',
        'Jennifer', 'Bobby', 'Elena', 'Anne', 'Will', 'Hannah'
    ];

    let counter = 0;
    const $quote = $("#quote");
    const $caption = $('#quote-caption');

    function changeQuote() {
        $quote.fadeOut(function(){
            $quote.html(quotes[counter]);
            $caption.html(`${names[counter]}, workshop participant`);
            counter = (counter + 1) % quotes.length;
            $quote.fadeIn();
        });
    }

    // Initialize first quote and set interval
    changeQuote();
    setInterval(changeQuote, 7000); // Update every 7 seconds

    // Scroll event to adjust opacity of main image
    const checkpoint = 100;

    $(window).on("scroll", function() {
        const position = $(window).scrollTop();
        const opacity = position <= checkpoint ? 1 : 0.2;
        $("#main-image").css("opacity", opacity);
    });

    // Smooth scrolling for "Learn More" button
    $("#learn-more").on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // Navbar toggler functionality
    $('.navbar-toggler').on('click', function() {
        $('#navbarNavAltMarkup').toggleClass('collapse');
    });

    // Add additional JavaScript functionalities as needed
});
