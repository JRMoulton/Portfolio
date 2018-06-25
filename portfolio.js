$(document).ready(function () {
    $("#first").css("height", ($(window).height()).toString() + "px")
});

$(".fa-play-circle").click(function() {
    if ($("#video").get(0).paused) {
        $("#video").get(0).play();
        $(".fa-play-circle").animate({fontSize: "180%"}, "fast");
    } else {
        $("#video").get(0).pause();
        $(".fa-play-circle").animate({fontSize: "150%"}, "fast");
    }
})