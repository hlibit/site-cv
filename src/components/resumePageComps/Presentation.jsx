import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AboutMeSection from "./AboutMeSection";
import CardsList from "./CardsList";
import EducationCard from "./EducationCard";
import SkillsSection from "./SkillsSection";
import TechCard from "./TechCard";

function Presentation({ currentOption, resumeFields }) {
  const field = resumeFields.find((i) => i.fieldName === currentOption);
  const { title, description, fieldName, data } = field;

  return (
    <Row
      type="vertical"
      className="flex-grow gap-12 text-center md:text-left lg:h-[470px]"
    >
      <Heading as="h1Thin">{title}</Heading>
      <div className="max-w-md text-text-dark">{description}</div>

      {fieldName === "Освіта" && (
        <CardsList
          data={data}
          className="grid-cols-1 lg:grid-cols-2"
          render={(item) => {
            return <EducationCard key={item.itemTitle} item={item} />;
          }}
        />
      )}

      {fieldName === "Технології" && (
        <CardsList
          data={data}
          className="grid-cols-2 lg:grid-cols-4"
          render={(item) => {
            return <TechCard key={item.itemTitle} item={item} />;
          }}
        />
      )}
      {fieldName === "Скіли" && <SkillsSection data={data} />}
      {fieldName === "Про мене" && <AboutMeSection data={data} />}
    </Row>
  );
}

export default Presentation;
