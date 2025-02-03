import Heading from "../../ui/Heading";

import AboutMeSection from "./AboutMeSection";
import CardsList from "./CardsList";
import EducationCard from "./EducationCard";
import SkillsSection from "./SkillsSection";
import TechCard from "./TechCard";

function Presentation({ currentOption, resumeFields }) {
  const field = resumeFields.find((i) => i.fieldName === currentOption);
  const { title, description, fieldName, data } = field;

  return (
    <div className="flex h-full flex-grow flex-col gap-10 text-center md:text-left">
      <Heading as="h1Thin">{title}</Heading>
      <div className="mx-auto max-w-[80%] text-text-dark md:mx-0">
        {description}
      </div>

      {fieldName === "Освіта" && (
        <CardsList
          data={data}
          className="mx-auto mt-auto max-w-full grid-cols-1 md:mx-0 lg:grid-cols-2"
          render={(item) => {
            return <EducationCard key={item.itemTitle} item={item} />;
          }}
        />
      )}

      {fieldName === "Технології" && (
        <CardsList
          data={data}
          className="mx-auto mt-auto max-w-full grid-cols-2 md:mx-0 lg:grid-cols-4"
          render={(item) => {
            return <TechCard key={item.itemTitle} item={item} />;
          }}
        />
      )}
      {fieldName === "Скіли" && <SkillsSection data={data} />}
      {fieldName === "Про мене" && <AboutMeSection data={data} />}
    </div>
  );
}

export default Presentation;
