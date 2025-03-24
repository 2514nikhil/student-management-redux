import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Navbar from "./Components/Navbar";
import Contect from "./Components/Contect";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Navbar />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/Student"
            element={
              <>
                <Navbar /> <Student />
              </>
            }
          ></Route>
          <Route
            path="/Contect"
            element={
              <>
                <Navbar /> <Contect />{" "}
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
