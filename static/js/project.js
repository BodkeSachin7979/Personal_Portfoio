        function filterProjects() {
            let query = document.getElementById('searchBar').value.toLowerCase();
            let projects = document.querySelectorAll('.project-card');

            projects.forEach(project => {
                let title = project.querySelector('.project-title').textContent.toLowerCase();
                let tech = project.getAttribute('data-tech').toLowerCase();

                if (title.includes(query) || tech.includes(query)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        }

        function addProject() {
            let title = prompt("Enter project title:");
            let description = prompt("Enter project description:");
            let techStack = prompt("Enter tech stack (comma-separated):");
            let liveDemo = prompt("Enter Live Demo URL (or leave blank):");
            let githubLink = prompt("Enter GitHub Repo URL:");

            if (title && description && techStack) {
                let projectList = document.getElementById('projectList');

                let projectCard = document.createElement("div");
                projectCard.classList.add("project-card");
                projectCard.setAttribute("data-tech", techStack);

                projectCard.innerHTML = `
                    <div class="project-title">${title}</div>
                    <div class="project-description">${description}</div>
                    <div class="project-tech">Tech Stack: ${techStack}</div>
                    <div class="project-links">
                        ${liveDemo ? `<a href="${liveDemo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ""}
                        ${githubLink ? `<a href="${githubLink}" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ""}
                    </div>
                `;

                projectList.appendChild(projectCard);
            }
        }