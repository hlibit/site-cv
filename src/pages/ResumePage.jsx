import { useState } from "react";
import { resumeFields } from "../data/resumeFields";
import OptionsList from "../components/resumePageComps/OptionsList";
import Presentation from "../components/resumePageComps/Presentation";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function ResumePage() {
  const [currentOption, setCurrentOption] = useState("Освіта");

  return (
    <div className="container mt-8 flex w-full max-w-[1000px] flex-col gap-8 md:my-auto md:flex-row md:items-start xl:gap-16">
      <Row type="vertical" className="gap-10 text-center md:text-left">
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
