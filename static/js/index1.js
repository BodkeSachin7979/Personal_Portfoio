/*hero section */
document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio Page Loaded!");
});

var typed = new Typed("#element", {
  strings: [
    "Python Developer",
    "Front-end developer",
    "UI Designer",
    "ML Engineer",
  ],
  typeSpeed: 50,
});

/*skills section */
function toggleDetails(id) {
  var details = document.getElementById(id);
  details.style.display =
    details.style.display === "none" || details.style.display === ""
      ? "block"
      : "none";
}

function removeProject(button) {
  button.parentElement.remove();
}

function addProject() {
  const projectsContainer = document.getElementById("projects-container");
  const newProject = document.createElement("div");
  newProject.className = "project-card";
  newProject.innerHTML = `
            <img src="https://via.placeholder.com/300" alt="Project Image">
            <h3>New Project</h3>
            <p>Description of the new project.</p>
            <a href="#">View Project</a>
            <button class="remove-btn" onclick="removeProject(this)">X</button>
        `;
  projectsContainer.appendChild(newProject);
}

function removeProject(button) {
  button.parentElement.remove();
}
