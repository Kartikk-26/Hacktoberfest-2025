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
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="stat-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <h3>{stat.label}</h3>
          <motion.p
            className="stat-number"
            style={{ color: stat.color }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
          >
            {stat.value}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
