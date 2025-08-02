// src/pages/Home.tsx
import React from 'react';
import { useTheme } from '../context/themeContext';

import stylesTheme1 from '../styles/theme1.module.css';
import stylesTheme2 from '../styles/theme2.module.css';
import stylesTheme3 from '../styles/theme3.module.css';
import ProductList from '../components/productList';

const Home: React.FC = () => {
  const { theme } = useTheme();

  const themeStyles = theme === 'theme1'
      ? stylesTheme1
      : theme === 'theme2'
      ? stylesTheme2
      : stylesTheme3;

  return (
    <main className={themeStyles.home} >
      <h1 className={themeStyles.titlemain}>Theme Switcher</h1>
      <p className={themeStyles.descriptionmain}>
        A theme switcher allows users to toggle between different visual styles, like light and dark modes, on a webpage. This improves accessibility and user experience by letting users choose a theme that suits their preferences. Typically, the switcher works by dynamically changing CSS variables or classes when activated.
      </p>
     
     <ProductList />
    </main>
  );
};

export default Home;
