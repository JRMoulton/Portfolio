$(document).ready(function () {
    $("#first").css("height", ($(window).height()).toString() + "px")
    document.querySelectorAll(".fa-angle-up").forEach(element => {
        element.style.display = "none";
    });
});

$(".fa-play-circle").click(function () {
    if ($("#video").get(0).paused) {
        $("#video").get(0).play();
        $(".fa-play-circle").animate({ fontSize: "180%" }, "fast");
    } else {
        $("#video").get(0).pause();
        $(".fa-play-circle").animate({ fontSize: "150%" }, "fast");
    }
});

var show = function (elem) {

    // Get the natural height of the element
    var getHeight = function () {
        elem.style.display = 'grid'; // Make it visible
        var height = (elem.scrollHeight) + 'px'; // Get it's height
        elem.style.display = ''; //  Hide it again
        return height;
    };

    var height = getHeight(); // Get the natural height
    elem.classList.add('is-visible'); // Make the element visible
    elem.style.height = height; // Update the max-height

    // Once the transition is complete, remove the inline max-height so the content can scale responsively
    window.setTimeout(function () {
        elem.style.height = '';
    }, 350);

    elem.style.display = 'grid'; // Make it visible

};

regex = /(\d{1,3}(\|-)?)?\(?\d{3}(\)|\|-)?\d{3}(\|-)?\d{4}/

// Hide an element
var hide = function (elem) {

    // Give the element a height to change from
    elem.style.height = elem.scrollHeight + 'px';

    // Set the height back to 0
    window.setTimeout(function () {
        elem.style.height = '0';
    }, 1);

    // When the transition is complete, hide it
    window.setTimeout(function () {
        elem.classList.remove('is-visible');
    }, 350);

};

// Toggle element visibility
var toggle = function (elem, timing) {

    // If the element is visible, hide it
    if (elem.classList.contains('is-visible')) {
        hide(elem);
        return;
    }

    // Otherwise, show it
    show(elem);

};

function toggleButton(id) {
    document.querySelectorAll("#" + id.toString()).forEach(tag => {
        if (tag.style.display == "none") {
            if (!tag.classList.contains("fa-angle-down")) {
                tag.style.display = "inline";
            } else {
                window.setTimeout(function () {
                    tag.style.display = "inline";
                }, 250);
            }
        } else {
            tag.style.display = "none";
        }
    });
}

// Listen for click events
document.addEventListener('click', function (event) {

    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggleButton(event.srcElement.id);
    toggle(content);

}, false);

