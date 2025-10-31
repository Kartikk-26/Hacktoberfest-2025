import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Stats.css';

const Stats = ({ pullRequests }) => {
  const [counts, setCounts] = useState({
    total: 0,
    accepted: 0,
    pending: 0,
    excluded: 0
  });

  useEffect(() => {
    const total = pullRequests.length;
    const accepted = pullRequests.filter(pr => pr.statusType === 'accepted').length;
    const excluded = pullRequests.filter(pr => pr.statusType === 'excluded').length;
    const pending = total - accepted - excluded;

    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        total: Math.floor(total * progress),
        accepted: Math.floor(accepted * progress),
        pending: Math.floor(pending * progress),
        excluded: Math.floor(excluded * progress)
      });

      if (step === steps) {
        clearInterval(timer);
        setCounts({ total, accepted, pending, excluded });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [pullRequests]);

  const statCards = [
    { label: 'Total PRs', value: counts.total, color: '#93C2DB' },
    { label: 'Accepted', value: counts.accepted, color: '#4ade80' },
    { label: 'Pending', value: counts.pending, color: '#fbbf24' },
    { label: 'Excluded', value: counts.excluded, color: '#f87171' }
  ];

  return (
      
    <div className="stats-container">
      {statCards.map(({ label, value, color }, index) => (
        <motion.div
          key={label}
          className="stat-card"
          initial={{ 
            opacity: 0,
            scale: 0.7,
            rotateY: -15,
            x: -30 
          }}
          animate={{ 
            opacity: 1,
            scale: 1,
            rotateY: 0,
            x: 0
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 13,
            mass: 0.8,
            delay: index * 0.2
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.2 + 0.3
            }}
          >
            {label}
          </motion.h3>
          <motion.p
            className="stat-number"
            style={{ color }}
            initial={{ scale: 0, rotateX: 90 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 8,
              delay: index * 0.2 + 0.5
            }}
          >
            {value}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );

};

export default Stats;
