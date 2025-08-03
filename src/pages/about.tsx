
import { useTheme } from '../context/themeContext';

import stylesTheme1 from '../styles/theme1.module.css';
import stylesTheme2 from '../styles/theme2.module.css';
import stylesTheme3 from '../styles/theme3.module.css';
import abouttheme from '../assets/abouttheme.jpg'

const About = () => {
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
        In a React application using TypeScript, the Context API serves as an effective solution for global theme management. It stores both the current theme and a function to update it, making this data accessible throughout the component tree. This approach simplifies state handling and keeps the codebase clean and maintainable.
        </p>
        <p className={themeStyles.descriptionabout}>
       Each theme—light, dark, and colorful—comes with its own set of CSS styles that define the visual appearance of the app. These styles are dynamically applied using class names tied to the active theme, allowing immediate changes in the user interface. This ensures a responsive and visually engaging experience.
        </p>
          <p className={themeStyles.descriptionabout}>
          To enhance usability, the app can save the user's selected theme in localStorage so it persists across sessions. This way, users return to the same visual settings they chose previously, without needing to reselect them. The ThemeSwitcher component handles this interaction smoothly.
          </p>
           <p className={themeStyles.descriptionabout}>
         Theme switching adds a layer of personalization and improves accessibility by supporting various user preferences. Whether it's reducing eye strain with dark mode or offering vibrant visuals with colorful mode, the app adapts to user needs. Using the Context API ensures this flexibility is built on a scalable and consistent structure.
          </p>
      </div>
    </div>
  );
};

export default About;
