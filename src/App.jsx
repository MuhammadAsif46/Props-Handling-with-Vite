import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Props Handling</h1>
      <div className="flex flex-wrap justify-around mt-4" >
        <Card username="Jhon" btnText="click"/>
        <Card username="Adam" btnText="click me"/>
        <Card username="Alan" btnText="clicked"/>
        <Card username="Clerk" btnText="read"/>
        <Card username="Kick" btnText="read me"/>
        <Card username="Lords" btnText="reading"/>
        <Card username="Mount" btnText="visit"/>
        <Card username="Perds" btnText="visit me"/>
        <Card username="Zampa" btnText="visited"/>
      </div>
    </>
  );
}

export default App;
