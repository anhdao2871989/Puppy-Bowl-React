import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers.jsx";
import SinglePlayer from "./components/SinglePlayer.jsx";
import Nav from "./components/nav.jsx";

function App() {
  return (
    <div className="App">
      <h1>Puppy Bowl!</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;