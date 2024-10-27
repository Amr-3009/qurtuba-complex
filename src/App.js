import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Boys from "./Routes/Boys";
import BoysInter from "./Routes/BoysInter";
import Unfinished from "./Routes/Unfinished";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="qurtuba-complex/" element={<Home />} />
        <Route path="qurtuba-complex/home" element={<Home />} />
        {/* <Route path="qurtuba-complex/kindergarten" element={<Kindergarten />} /> */}
        <Route path="qurtuba-complex/boys" element={<Boys />} />
        <Route
          path="qurtuba-complex/boys/international"
          element={<BoysInter />}
        />
        {/* <Route path="qurtuba-complex/girls" element={<Girls />} /> */}
        <Route path="qurtuba-complex/contact" element={<Contact />} />
        <Route path="*" element={<Unfinished />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
