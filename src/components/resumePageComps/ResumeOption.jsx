import AnimatedBox from "../../ui/AnimatedBox";
import { createRandomDelay } from "../../utils/helpers";

function ResumeOption({ option, currentOption, setCurrentOption }) {
  const isActive = currentOption === option;

  return (
    <li className="w-[380px] text-center md:w-[300px] xl:w-[380px]">
      <AnimatedBox delay={createRandomDelay()}>
        <div
          onClick={() => setCurrentOption(option)}
          className={
            "rounded-md py-4 " +
            (isActive
              ? "cursor-pointer bg-text-darkGreen text-background-secondary"
              : "cursor-pointer bg-background-secondary text-text-primary")
          }
        >
          {option}
        </div>
      </AnimatedBox>
    </li>
  );
}

export default ResumeOption;
