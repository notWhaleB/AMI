var isActive = false;

function slide(value) {
    if (!isActive) {
        isActive = true;
        document.getElementById('main-slider').style.left = "-" + 100 * value + "vw";
        setTimeout(function(){isActive = false}, 1100);

        if (value == 4) {
            setTimeout(function() {
                document.getElementById('main-slider').style.transitionDuration = "0s";
                document.getElementById('main-slider').style.webkitTransitionDuration = "0s";
                setTimeout(function() {
                    document.getElementById('main-slider').style.left = "0";
                }, 20);
                setTimeout(function() {
                    document.getElementById('main-slider').style.transitionDuration = "1s";
                    document.getElementById('main-slider').style.webkitTransitionDuration = "1s";
                }, 40);
            }, 1020);
        }
    }
}