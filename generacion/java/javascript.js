// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    highlightActiveLink();
    setupProgressBars();
    setupMessageForm();
});

// Function to highlight the active nav link based on the current page
function highlightActiveLink() {
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".sidebar ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Function to animate progress bars on the dashboard
function setupProgressBars() {
    let progressBars = document.querySelectorAll(".progress-bar span");

    progressBars.forEach(bar => {
        let targetWidth = bar.getAttribute("data-progress");
        bar.style.width = targetWidth;
    });
}

// Function to handle messages in the contact chat
function setupMessageForm() {
    let messageForm = document.querySelector(".message-form");
    let messageInput = document.querySelector(".input-box");
    let chatBox = document.querySelector(".chat-box");

    if (messageForm) {
        messageForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let messageText = messageInput.value.trim();

            if (messageText !== "") {
                let newMessage = document.createElement("div");
                newMessage.classList.add("message", "user2");
                newMessage.textContent = "Tú: " + messageText;
                chatBox.appendChild(newMessage);

                messageInput.value = "";
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
    }
}

// Function to initialize Owl Carousel for class carousels
$(document).ready(function () {
    $(".class-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});

// Function to initialize Owl Carousel for videos
$(document).ready(function () {
    $(".video-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});