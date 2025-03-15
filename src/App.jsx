import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import StudyNow from "./pages/StudyNow";
import Add from "./components/Add/Add";
import More from "./pages/More";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/studynow" element={<StudyNow />} />
          <Route path="/add" element={<Add />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
