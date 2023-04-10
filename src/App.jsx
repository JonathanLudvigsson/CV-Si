import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Contactme from "./pages/Contactme";
import KonamiCode from "./components/KonamiCode"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <KonamiCode />
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<Contactme />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App
