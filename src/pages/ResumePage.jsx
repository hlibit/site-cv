import { useState } from "react";
import { resumeFields } from "../data/resumeFields";
import OptionsList from "../components/resumePageComps/OptionsList";
import Presentation from "../components/resumePageComps/Presentation";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function ResumePage() {
  const [currentOption, setCurrentOption] = useState("Освіта");

  return (
    <div className="flex h-[470px] items-start gap-16">
      <Row type="vertical" className="max-w-[30%] gap-10">
        <Heading as="h1Thin">Чому саме я?</Heading>
        <div className="max-w-md text-text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <OptionsList
          resumeFields={resumeFields}
          currentOption={currentOption}
          setCurrentOption={setCurrentOption}
        />
      </Row>
      <Presentation resumeFields={resumeFields} currentOption={currentOption} />
    </div>
  );
}

export default ResumePage;
