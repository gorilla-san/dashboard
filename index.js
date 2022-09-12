const collapse = document.querySelector(".sidebar")
const arrow = document.querySelector(".sidebar-collapse")
const startNewProject = document.querySelector("#new-project")

window.addEventListener("resize", function() {
    if (window.innerWidth > 900) {
        collapse.classList.remove("visible"); arrow.classList.remove("open");
    }
    if (window.innerWidth > 1250) {
        startNewProject.textContent = "Start New Project";
    }
    else if (window.innerWidth <= 1250 && window.innerWidth > 1060) {
        startNewProject.textContent = "New Project";
    }
    else if (this.window.innerWidth <=1060) {
        startNewProject.textContent = "New";
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

function getNoped () {
    alert("Nope")
}
