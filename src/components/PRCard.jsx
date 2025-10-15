import { motion } from 'framer-motion';
import './PRCard.css';

const PRCard = ({ pr, index }) => {
  const getStatusClass = (statusType) => {
    switch (statusType) {
      case 'accepted':
        return 'status-accepted';
      case 'excluded':
        return 'status-excluded';
      default:
        return 'status-pending';
    }
  };

  return (
    <motion.div
      className="pr-card"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.02, x: 10 }}
    >
      <div className="pr-header">
        <motion.div
          className={`status-badge ${getStatusClass(pr.statusType)}`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {pr.status}
        </motion.div>
        <motion.span
          className="pr-info-icon"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          ?
        </motion.span>
      </div>

      <div className="pr-content">
        <h3 className="pr-title">Title: {pr.title}</h3>
        <p className="pr-number">PR: {pr.pr}</p>
      </div>

      <motion.a
        href={pr.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-github"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        VIEW ON GITHUB
      </motion.a>
    </motion.div>
  );
};

export default PRCard;
