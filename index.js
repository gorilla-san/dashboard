    const collapse = document.querySelector(".sidebar")
    const arrow = document.querySelector(".sidebar-collapse")

window.addEventListener("resize", function() {
    if (window.innerWidth > 900) {
        collapse.classList.remove("visible"); arrow.classList.remove("open")
    }
  });

function collapseSidebar () {
    if ( collapse.classList.contains("visible")) {
        collapse.classList.remove("visible");
    }
    else collapse.classList.add("visible");

    if (arrow.classList.contains("open")) {
        arrow.classList.remove("open");
    }
    else arrow.classList.add("open");

}