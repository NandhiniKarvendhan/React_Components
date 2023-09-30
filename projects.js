class Project extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const github = this.getAttribute("github");
    const demo = this.getAttribute("demo");

    this.innerHTML = `
    <div class="card">
        <div class="card-header"><h3>${title}</h3></div>
        <div class="card-body">
          
          <p class="card-text">
            <table class="table">
              <tr>
                  <td class="text-success font-weight-bold">Title:</td>
                  <td>${title}</td>
              </tr>
              <tr>
                  <td class="text-success font-weight-bold">Description:</td>
                  <td>${description}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">GitHub:</td>
                <td><a href=${github}>${title} on GitHub</td>
            </tr>
            <tr>
              <td class="text-success font-weight-bold">Demo:</td>
              <td>   <a
                href=${demo}
               
                ><img class="eye-icon" src="img/eye.svg"></a
              ></td>
          </tr>
          </table>
          </p>
         </div>
      </div>

    `;
  }
}

customElements.define("simple-project", Project);
