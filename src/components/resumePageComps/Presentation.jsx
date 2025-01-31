import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import CardsList from "./CardsList";
import EducationCard from "./EducationCard";
import TechCard from "./TechCard";

function Presentation({ currentOption, resumeFields }) {
  const field = resumeFields.find((i) => i.fieldName === currentOption);
  const { title, description, fieldName, data } = field;
  console.log(field);
  return (
    <Row type="vertical" className="max-h-[100%] flex-grow gap-12">
      <Heading as="h1Thin">{title}</Heading>
      <div className="max-w-md text-text-dark">{description}</div>

      {fieldName === "Освіта" && (
        <CardsList
          data={data}
          gridCols={2}
          render={(item) => {
            return <EducationCard item={item} />;
          }}
        />
      )}

      {fieldName === "Технології" && (
        <CardsList
          data={data}
          gridCols={4}
          render={(item) => {
            return <TechCard item={item} />;
          }}
        />
      )}
      {fieldName === "Скіли" && <div>c</div>}
      {fieldName === "Про мене" && <div>d</div>}
    </Row>
  );
}

export default Presentation;
