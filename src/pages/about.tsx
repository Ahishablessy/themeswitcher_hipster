// // src/pages/About.tsx
// import React from 'react';
// import { useTheme } from '../context/themeContext';

// import stylesTheme1 from '../styles/theme1.module.css';
// import stylesTheme2 from '../styles/theme2.module.css';
// import stylesTheme3 from '../styles/theme3.module.css';
// import abouttheme from '../assets/abouttheme.jpg'

// const About: React.FC = () => {
//   const { theme } = useTheme();

//   const themeStyles =
//     theme === 'theme1' ? stylesTheme1 :
//     theme === 'theme2' ? stylesTheme2 :
//     stylesTheme3;

//   return (
//     <div className={themeStyles.aboutContainer}>
//       <div className={themeStyles.imageSection}>
//         <img
//           src={abouttheme}
//           alt="About Illustration"
//           className={themeStyles.aboutImage}
//         />
//       </div>
//       <div className={themeStyles.textSection}>
//         <h2 className={themeStyles.title}>About Us</h2>
//         <p className={themeStyles.description}>
//           Welcome to our themed React app! This project demonstrates dynamic theme switching,
//           clean UI architecture, and responsive design using React, TypeScript, and CSS Modules.
//           You can toggle between minimalist, dark, and playful themes to explore different layouts.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { useTheme } from '../context/themeContext';

import stylesTheme1 from '../styles/theme1.module.css';
import stylesTheme2 from '../styles/theme2.module.css';
import stylesTheme3 from '../styles/theme3.module.css';
import abouttheme from '../assets/abouttheme.jpg'

const About: React.FC = () => {
  const { theme } = useTheme();

  const themeStyles =
    theme === 'theme1'
      ? stylesTheme1
      : theme === 'theme2'
      ? stylesTheme2
      : stylesTheme3;

  return (
    <div className={themeStyles.aboutContainer}>
      <div className={themeStyles.imageSection}>
        <img
          src={abouttheme}
          alt="About"
          className={themeStyles.aboutImage}
        />
      </div>
      <div className={themeStyles.textSection}>
        <h1 className={themeStyles.titleabout}>About Theme Switch</h1>
        <p className={themeStyles.descriptionabout}>
        In a React app with TypeScript, the Context API allows you to manage themes like light, dark, and colorful globally. The ThemeContext holds the current theme and a function to update it, making it accessible to all components. Users can toggle between these themes via a ThemeSwitcher, which updates the theme state and re-renders the UI with the corresponding styles.
        </p>
        <p className={themeStyles.descriptionabout}>
       Each theme has its own set of CSS rules, applied dynamically using class names. The light theme uses bright backgrounds, the dark theme uses dark backgrounds, and the colorful theme incorporates vibrant colors for a playful look. This enables the app to cater to different user preferences and environments. The visual changes are immediate, providing a smooth and engaging experience.
        </p>
          <p className={themeStyles.descriptionabout}>
           To improve user experience, the selected theme can be saved in localStorage, so it persists across sessions. Using the Context API ensures the theme is easily accessible across the app, keeping the UI flexible and user-friendly. This setup enhances accessibility and makes the app feel more personalized for each user.
          </p>
      </div>
    </div>
  );
};

export default About;
