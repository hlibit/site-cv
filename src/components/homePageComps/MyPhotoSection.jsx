import AnimatedBox from "../../ui/AnimatedBox";
import Row from "../../ui/Row";
import { motion } from "motion/react";

function MyPhotoSection() {
  return (
    <Row
      type="horizontal"
      className="relative order-1 justify-center md:order-2"
    >
      <AnimatedBox
        delay={0.4}
        className="h-[288px] w-[288px] mix-blend-lighten sm:h-[310px] sm:w-[310px] md:h-[330px] md:w-[330px] lg:h-[386px] lg:w-[386px] xl:h-[426px] xl:w-[426px]"
      >
        <img
          className="h-full w-full rounded-full p-9 opacity-80"
          src="my_photo.png"
        />
      </AnimatedBox>

      <AnimatedBox delay={1} className="absolute">
        <motion.svg
          className="h-[290px] w-[290px] sm:h-[312px] sm:w-[312px] md:h-[332px] md:w-[332px] lg:h-[388px] lg:w-[388px] xl:h-[428px] xl:w-[428px]"
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
