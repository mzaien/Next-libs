function Index({ name }) {
  return (
    <p
      style={{
        padding: "1.5rem",
        fontSize: "2rem",
        fontFamily: "monospace",
      }}
    >
      {name}
    </p>
  );
}
function Home() {
  return <Index name="Abdullah"></Index>;
}
export default Home;
