function App() {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("./projects.json");
      const json = await response.json();
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);
  return (
    <>
      {loaded &&
        data.projects.map((project, i) => (
          <simple-project
            title={project.title}
            description={project.description}
            github={project.github}
            demo={project.demo}
            key={i}
          />
        ))}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
