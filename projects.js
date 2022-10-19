class Project extends HTMLElement {
  constructor() {
    super();
  }

  set project(project) {
    this.innerHTML = `
    <div class="card">
    <div class="card-header"><h3>${project.title}</h3></div>
    <div class="card-body">
      <p class="card-text">
       <table class="table">
        <tr>
          <td class="text-success font-weight-bold">Title:</td>
          <td>${project.title}</td>
        </tr>
        <tr>
          <td class="text-success font-weight-bold">Description: </td>
          <td>${project.description}</td>
        </tr>
        <tr>
          <td class="text-success font-weight-bold">GitHub: </td>
          <td><a href=${project.github}>${project.title} on GitHub</td>
        </tr>
        <tr>
          <td class="text-success font-weight-bold">Demo: </td>
          <td><a href=${project.demo}><img class="eye-icon" src="img/eye.svg"></td>
        </tr>
       </table>
      </p>
    </div>
  </div>
    `;
  }
}

customElements.define("simple-project", Project);
