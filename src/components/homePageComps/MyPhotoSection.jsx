import AnimatedBox from "../../ui/AnimatedBox";
import Row from "../../ui/Row";
import { motion } from "motion/react";

function MyPhotoSection() {
  return (
    <Row type="horizontal" className="relative justify-center">
      <AnimatedBox delay={0.4} className="mix-blend-lighten">
        <img
          className="h-[500px] rounded-full p-8 opacity-80"
          src="my_photo.png"
        />
      </AnimatedBox>

      {/* <div
        style={{
          WebkitMask:
            "radial-gradient(farthest-side, #0000 calc(100% - 7px), #000 0)",
          mask: "radial-gradient(farthest-side, #0000 calc(100% - 7px), #000 0)",
          background: `conic-gradient(
      transparent 0deg, #02FE9C 5deg, transparent 35deg,
      transparent 45deg, #02FE9C 50deg, transparent 80deg,
      transparent 90deg, #02FE9C 95deg, transparent 125deg,
      transparent 135deg, #02FE9C 140deg, transparent 170deg,
      transparent 180deg, #02FE9C 185deg, transparent 215deg,
      transparent 225deg, #02FE9C 230deg, transparent 260deg,
      transparent 270deg, #02FE9C 275deg, transparent 305deg,
      transparent 315deg, #02FE9C 320deg, transparent 350deg
    )`,
        }}
        className="animate-spin-superSlow absolute h-[95%] w-[95%] rounded-full opacity-80"
      ></div> */}

      <AnimatedBox delay={1} className="absolute">
        <motion.svg
          width="500px"
          height="490px"
          viewBox="0 0 506 506"
          fill="transparent"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#02FE9C"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            strokeDashoffset="0"
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </AnimatedBox>
    </Row>
  );
}

export default MyPhotoSection;
