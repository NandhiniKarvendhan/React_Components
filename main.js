import "./projects.js";

window.addEventListener("load", () => {
  createProjectList();
});

async function createProjectList() {
  const response = await fetch("./projects.json");
  const json = await response.json();
  const projects = document.getElementById("projects");
  console.log(json.projects);

  json.projects.forEach((project) => {
    const element = document.createElement("simple-project");
    console.log(element);
    element.project = project;
    projects.appendChild(element);
  });
}
