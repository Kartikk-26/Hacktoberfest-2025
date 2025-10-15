import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="nav">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L5 15V25L20 35L35 25V15L20 5Z" stroke="#93C2DB" strokeWidth="2" fill="none"/>
              <circle cx="20" cy="20" r="8" fill="#93C2DB" opacity="0.3"/>
            </svg>
            <span>Hacktoberfest</span>
          </div>
          <nav className="nav-links">
            <a href="https://www.tech.kartik.sbs/" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
            <a href="https://github.com/Kartikk-26" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href="https://ai.kartik.sbs/" target="_blank" rel="noopener noreferrer">CHATAPP</a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
