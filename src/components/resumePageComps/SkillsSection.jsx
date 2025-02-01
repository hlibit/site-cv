import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import SkillItem from "./SkillItem";
import SkillsList from "./SkillsList";
import { FaFeather } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";

function SkillsSection({ data: { soft, hard } }) {
  return (
    <Row type="horizontal" className="items-start">
      <div className="w-[50%]">
        <Row type="horizontal" className="mb-7 gap-4">
          <FaFeather size={20} className="text-text-darkGreen" />
          <Heading as="h3">Soft-Skills</Heading>
        </Row>
        <SkillsList>
          {soft.map((skill) => {
            return <SkillItem key={skill} skill={skill} />;
          })}
        </SkillsList>
      </div>
      <div className="w-[50%]">
        <Row type="horizontal" className="mb-7 gap-4">
          <GiMuscleUp size={20} className="text-text-darkGreen" />
          <Heading as="h3">Hard-Skills</Heading>
        </Row>

        <SkillsList>
          {hard.map((skill) => {
            return <SkillItem key={skill} skill={skill} />;
          })}
        </SkillsList>
      </div>
    </Row>
  );
}

export default SkillsSection;
