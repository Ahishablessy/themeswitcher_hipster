import { useTheme } from '../context/themeContext';

import stylesTheme1 from '../styles/theme1.module.css';
import stylesTheme2 from '../styles/theme2.module.css';
import stylesTheme3 from '../styles/theme3.module.css';

const Contact  = () => {
  const { theme } = useTheme();

  const themeStyles =
    theme === 'theme1' ? stylesTheme1 :
    theme === 'theme2' ? stylesTheme2 :
    stylesTheme3;

  return (
    <div className={themeStyles.contactContainer}>
      <div className={themeStyles.addressCard}>
        <h2 className={themeStyles.info}> Our Office</h2>
        <p>Hipster Pte. Ltd. </p>
        <p># 01-04, 75 Ayer Rajah Crescent, 139953, Singapore</p>
        <p>📞 +91 9876543210</p>
        <p>✉️ hr@hipster-inc.com</p>
        <p>🕒 Mon - Fri: 9am - 7pm</p>
          <h2>Personal Info</h2>
        <p>Ahisha Blessy R N(React Developer)</p>
        {/* <p>https://ahishablessy.github.io/portfolio/</p> */}
                <a className={themeStyles.portfolio} target="_blank" href='https://ahishablessy.github.io/portfolio/'>Click the portfolio</a>

        <p>📞 +91 9489404059</p>
        <p>✉️ ahisharn@gmail.com</p>

      </div>
      
      
     

      <div className={themeStyles.contactFormWrapper}>
        <h2>Contact Us</h2>
        <form className={themeStyles.contactForm}>
          <input type="text" placeholder="Your Name" className={themeStyles.input} />
          <input type="email" placeholder="Your Email" className={themeStyles.input} />
          <textarea placeholder="Your Message" className={themeStyles.textarea}></textarea>
          <button type="submit" className={themeStyles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
