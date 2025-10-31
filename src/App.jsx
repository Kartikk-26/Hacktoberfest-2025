import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Profile from './components/Profile';
import Stats from './components/Stats';
import PRCard from './components/PRCard';
import { pullRequests } from './data/prData';
import './App.css';

function App() {
  return (
    <div className="app">
      <AnimatedBackground />
      <Header />

      <main className="main">
        <div className="app-container">
          {/* Profile Section */}
          <Profile />

          {/* Profile Stats */}
          <Stats pullRequests={pullRequests} />

          {/* Pull Requests Section */}
          <section className="pr-section">
            <motion.h1
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Pull/Merge Requests
            </motion.h1>

            <div className="pr-list">
              {pullRequests.map((pr, index) => (
                <PRCard key={pr.id} pr={pr} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="container footer-content">
          <div className="footer-info">
            <h3>Kartik Jain</h3>
            <p>
              DevOps Engineer at <a href="https://kvgai.com/" target="_blank" rel="noopener noreferrer" className="footer-company-link">KVGAI TECH</a>
            </p>
          </div>
          <div className="footer-links">
            <a href="https://www.tech.kartik.sbs/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <a href="https://github.com/Kartikk-26" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://ai.kartik.sbs/" target="_blank" rel="noopener noreferrer">ChatApp</a>
          </div>
          <div className="footer-bottom">
            <p>Built for Hacktoberfest 2025 | Open Source Contribution</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
