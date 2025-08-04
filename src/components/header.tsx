
import { useState } from 'react';
import { useTheme } from '../context/themeContext';
import { Link } from 'react-router-dom';
import ablogo from '../assets/ablogo.png'
import stylesTheme1 from '../styles/theme1.module.css';
import stylesTheme2 from '../styles/theme2.module.css';
import stylesTheme3 from '../styles/theme3.module.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
   const navigate = useNavigate();

  const themeStyles =
    theme === 'theme1' ? stylesTheme1 :
    theme === 'theme2' ? stylesTheme2 :
    stylesTheme3;

  return (
    <header className={themeStyles.header}>
      <div className={themeStyles.headerContent}>
        <div className={themeStyles.logo} > 
          <img src={ablogo} className={themeStyles.widthset} style={{cursor:"pointer"}} onClick={() => navigate('/')}/> &nbsp;
        <span className={themeStyles.logotitle}> AB Theme Switcher</span>
        </div>
        <div className={themeStyles.widthbutton}>
        <button className={themeStyles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
</div>
        <nav className={`${themeStyles.nav} ${menuOpen ? themeStyles.open : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <select className={themeStyles.selectthemeoption} style={{cursor:"pointer"}}
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value as any);
              setMenuOpen(false);
            }}
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
