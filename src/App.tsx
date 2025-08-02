import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";

import { useTheme } from "./context/themeContext";
import theme1 from "./styles/theme1.module.css";
import theme2 from "./styles/theme2.module.css";
import theme3 from "./styles/theme3.module.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";


const App = () => {
  const { theme } = useTheme();
  const themeClasses = {
    theme1: theme1.app,
    theme2: theme2.app,
    theme3: theme3.app,
  };

  return (
    <div className={themeClasses[theme]} style={{background:"red"}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
