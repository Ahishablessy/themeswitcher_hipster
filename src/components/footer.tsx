// src/components/Footer/Footer.tsx
import React from 'react';
import { useTheme } from '../context/themeContext';
import { Link } from 'react-router-dom';
import ablogo from '../assets/ablogo.png'

import stylesTheme1 from '../styles/theme1.module.css';
import stylesTheme2 from '../styles/theme2.module.css';
import stylesTheme3 from '../styles/theme3.module.css';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const themeStyles =
    theme === 'theme1' ? stylesTheme1 :
    theme === 'theme2' ? stylesTheme2 :
    stylesTheme3;

  return (
    <footer className={themeStyles.footer}>
      <div className={themeStyles.column}>
        <h2 className={themeStyles.logo}><img src={ablogo} style={{width:"10%"}}/></h2>
        {/* <p>Creative Theme Switcher</p> */}
      </div>

      <div className={themeStyles.column}>
        {/* <h3>Address</h3> */}
        <span>Hipster Pte. Ltd.</span>
        <span># 01-04, 75 Ayer Rajah Crescent, 139953, Singapore</span>
        <span>hr@hipster-inc.com</span>
      </div>

      <div className={themeStyles.column}>
       
        <ul className={themeStyles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
