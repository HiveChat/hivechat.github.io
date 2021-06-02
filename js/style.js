
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive")
        setTimeout(fn, 1); // call on next available tick
    else
        document.addEventListener("DOMContentLoaded", fn);
}

function loadNav() {
    navs = document.getElementsByClassName("nav");
    navSpacer = document.getElementById("nav-spacer")

    if (navs.length == 0)
        return;

    window.onscroll = function () {
        if (window.scrollY > 0) {
            navs[0].style.boxShadow = "0 0 8px #bdbdbd";
            navs[0].style.position = "fixed";
            navSpacer.style.display = "flex";
        } else {
            navs[0].style.boxShadow = "none";
            navs[0].style.position = "static";
            navSpacer.style.display = "none";
        }
    }

    console.log(navs[0].style.height);

}

docReady(function () {
    loadNav();
});
