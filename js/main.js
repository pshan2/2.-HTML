$(document).ready(function () {
    paceOptions = {
        elements: true
    };

    sameHeight();
    tiles();
    autoPlayYouTubeModal();

    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

function sameHeight() {
    $(".tile").height($(".tile1").width());
    $(".tile-inner").height($(".tile1").width());

    $(window).resize(function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 10);
    });

    $(window).bind('resizeEnd', function () {
        $(".tile").height($(".tile1").width());
        $(".tile-inner").height($(".tile1").width());
    });

}

function tiles() {
    // Hover
    $(".tile-item").click(function () {
        if ($("html").hasClass("mobile")) {
            $(this).toggleClass("js-active");
        }
    });
}

//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATA TAG also Append to body to pull video to top.
function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
        $('.modal').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
        $('#videoModal').appendTo("body");
    });
}




/* --------------------------------------------
 Platform detect
 --------------------------------------------- */
var mobileTest;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    mobileTest = true;
    $("html").addClass("mobile");
}
else {
    mobileTest = false;
    $("html").addClass("no-mobile");
}

var mozillaTest;
if (/mozilla/.test(navigator.userAgent)) {
    mozillaTest = true;
}
else {
    mozillaTest = false;
}
var safariTest;
if (/safari/.test(navigator.userAgent)) {
    safariTest = true;
}
else {
    safariTest = false;
}

// Detect touch devices
if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
}

$(".navbar-toggle").click(function () {
    if ($("#navbar-collapse").hasClass("in")) {
        return $("body").removeClass("no-scroll");
    } else {
        return $("body").addClass("no-scroll");
    }
});