import { motion } from "motion/react";

function AnimatedBox({ delay, className, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      className={className || ""}
      animate={{
        opacity: 1,
        transition: { delay: delay, duration: 0.4, ease: "easeIn" },
      }}
    >
      {children}
    </motion.div>
  );
}
export default AnimatedBox;
