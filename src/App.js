import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StudyRoom from "./pages/StudyRoom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Meeting from "./pages/Meeting";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/studyroom" element={<StudyRoom />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/meeting" element={<Meeting />}></Route>
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
