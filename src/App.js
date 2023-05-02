import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/layouts/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error404 from "./pages/404/404";
import Fiche from "./pages/Fiche-logement/Fiche-logement";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Fiche />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
