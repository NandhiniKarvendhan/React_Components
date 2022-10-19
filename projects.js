function Project({ data }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{data.title}</h3>
      </div>
      <div className="card-body">
        <table className="table">
          <tbody>
            <tr>
              <td className="text-success font-weight-bold">Title:</td>
              <td>{data.title}</td>
            </tr>
            <tr>
              <td className="text-success font-weight-bold">Description: </td>
              <td>{data.description}</td>
            </tr>
            <tr>
              <td className="text-success font-weight-bold">GitHub: </td>
              <td>
                <a href={data.github}>{data.title} on GitHub</a>
              </td>
            </tr>
            <tr>
              <td className="text-success font-weight-bold">Demo: </td>
              <td>
                <a href={data.demo}>
                  <img className="eye-icon" src="img/eye.svg"></img>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
