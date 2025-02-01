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
      className="max-h-[100%] max-w-[calc(70%-64px)] flex-grow gap-12"
    >
      <Heading as="h1Thin">{title}</Heading>
      <div className="max-w-md text-text-dark">{description}</div>

      {fieldName === "Освіта" && (
        <CardsList
          data={data}
          gridCols="grid-cols-2"
          render={(item) => {
            return <EducationCard key={item.itemTitle} item={item} />;
          }}
        />
      )}

      {fieldName === "Технології" && (
        <CardsList
          data={data}
          gridCols="grid-cols-4"
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
