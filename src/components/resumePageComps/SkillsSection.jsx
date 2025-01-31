import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import SkillItem from "./SkillItem";
import SkillsList from "./SkillsList";
import { FaFeather } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";

function SkillsSection() {
  return (
    <Row type="horizontal" className="items-start">
      <div className="w-[50%]">
        <Row type="horizontal" className="mb-6 justify-center gap-4">
          <FaFeather size={20} className="text-text-darkGreen" />
          <Heading as="h3">Soft-Skills</Heading>
        </Row>
        <SkillsList>
          {Array.from([1, 2, 3, 4]).map((skill) => {
            return <SkillItem />;
          })}
        </SkillsList>
      </div>
      <div className="w-[50%]">
        <Row type="horizontal" className="mb-6 justify-center gap-4">
          <GiMuscleUp size={20} className="text-text-darkGreen" />
          <Heading as="h3">Hard-Skills</Heading>
        </Row>

        <SkillsList>
          {Array.from([1, 2, 3, 4]).map((skill) => {
            return <SkillItem />;
          })}
        </SkillsList>
      </div>
    </Row>
  );
}

export default SkillsSection;
