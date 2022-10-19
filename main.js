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
        data.projects.map((project, i) => <Project data={project} key={i} />)}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
