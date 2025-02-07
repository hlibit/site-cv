import { useState } from "react";
import { resumeFields } from "../data/resumeFields";
import OptionsList from "../components/resumePageComps/OptionsList";
import Presentation from "../components/resumePageComps/Presentation";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function ResumePage() {
  const [currentOption, setCurrentOption] = useState("Освіта");

  return (
    <div className="mt-8 flex h-full w-full max-w-[1000px] flex-col gap-8 md:my-auto md:h-[536px] md:flex-row md:items-start lg:gap-14 xl:gap-16">
      <Row
        type="vertical"
        className="h-full max-w-full gap-10 text-center md:max-w-[40%] md:text-left lg:max-w-[30%]"
      >
        <Heading as="h1Thin">Чому саме я?</Heading>
        <div className="mx-auto mb-auto max-w-[80%] text-text-dark md:mx-0 md:max-w-full">
          Я відданий розробці, що є моєю пристрастю, якій я присвячую кожен
          день. Саме я є відповідальною "опорою" та невід'ємною частиною
          команди!
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
