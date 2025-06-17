import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({ 
  children, 
  className = '',
  onClick,
  delay = 0
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden
        transition-all duration-300 hover:shadow-xl
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card; 