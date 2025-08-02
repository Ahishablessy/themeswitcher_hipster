// src/pages/Home.tsx
import React from 'react';
import { useTheme } from '../context/themeContext';

import stylesTheme1 from '../styles/theme1.module.css';
import stylesTheme2 from '../styles/theme2.module.css';
import stylesTheme3 from '../styles/theme3.module.css';
import ProductList from '../components/productList';

const About: React.FC = () => {
  const { theme } = useTheme();

  const themeStyles = theme === 'theme1'
      ? stylesTheme1
      : theme === 'theme2'
      ? stylesTheme2
      : stylesTheme3;

  return (
    <main className={themeStyles.home} >
      <h1 className={themeStyles.title}>Welcome to Theme Switcher</h1>
      <p className={themeStyles.description}>
        Switch themes from the dropdown to experience different designs.
      </p>
      <button className={themeStyles.button}>Click Me</button>
    
    </main>
  );
};

export default About;
