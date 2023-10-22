function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}


// Get the progress bar element
const progressBar = document.querySelector(".progress-bar");

// Function to animate the progress bar
function animateProgressBar() {
    let width = 0;
    const targetWidth = 90; // The target percentage

    const animation = setInterval(function() {
        if (width >= targetWidth) {
            clearInterval(animation);
        } else {
            width++;
            progressBar.style.width = width + "%";
            progressBar.querySelector("span").textContent = width + "%";
        }
    }, 10);
}

// Add the animation when the user scrolls over it
window.addEventListener("scroll", function() {
    const element = document.querySelector(".progress-wrap");
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        // When the element is in the viewport
        animateProgressBar();
    }
});


document.getElementById("emailContainer").addEventListener("click", function() {
    window.location.href = "mailto:eaaunbrook@gmail.com";
});
document.getElementById("phoneContainer").addEventListener("click", function() {
    window.location.href = "tel:+916282381337";
});
// ---------------------------------------------------------------------------------------------------------

