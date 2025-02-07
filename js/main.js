(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('nav-sticky');
        } else {
            $('#nav').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills section
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    

    // Clients carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });
    

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
  
})(jQuery);

//chatbot 
function toggleChat() {
    const chatbox = document.getElementById("chatbot");
    chatbox.style.display = chatbox.style.display === "none" || chatbox.style.display === "" ? "block" : "none";
}

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim();
    if (message === "") return;

    appendMessage("You", message);
    setTimeout(() => botReply(message), 1000);
    inputField.value = "";
}

function appendMessage(sender, message) {
    const chatBody = document.getElementById("chat-body");
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(userMessage) {
    const responses = {
        "hello": "Welcome to Tech Solutions! How can we assist you today?",
        "what services do you offer": "We specialize in web development, AI solutions, and cloud services.",
        "how can I contact you": "You can reach us via email at contact@whitecode.com or call us at +123456789.",
        "do you provide support": "Yes! We offer 24/7 customer support for our clients.",
        "pricing": "Our pricing varies based on the project. Contact us for a customized quote.",
        "where are you located": "Our headquarters is in pune, but we serve clients worldwide.",
        "bye": "Thank you for visiting Tech Solutions! Have a great day!"
    };

    let reply = responses[userMessage.toLowerCase()] || "I'm not sure, but I'd love to learn! Please contact our support for more info.";
    appendMessage("Bot", reply);
}

