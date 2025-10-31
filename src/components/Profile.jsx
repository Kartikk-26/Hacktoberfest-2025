import { motion } from 'framer-motion';
import './Profile.css';

const Profile = () => {
  return (
    <motion.div
      className="profile-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="profile-content">
        <motion.div
          className="profile-avatar"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <div className="avatar-ring">
            <div className="avatar-inner">
              KJ
            </div>
          </div>
        </motion.div>

        <motion.div
          className="profile-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h1 className="profile-name">Kartik Jain</h1>
          <p className="profile-role">
            DevOps Engineer at <a href="https://kvgai.com/" target="_blank" rel="noopener noreferrer" className="company-link">KVGAI TECH</a>
          </p>
          <motion.div 
            className="profile-badges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.span 
              className="badge"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Hacktoberfest 2025
            </motion.span>
            <motion.span 
              className="badge"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Open Source Contributor
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
