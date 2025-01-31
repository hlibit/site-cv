import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { GoDotFill } from "react-icons/go";

function EducationCard({ item }) {
  return (
    <Row
      type="vertical"
      className="gap-3 rounded-lg border-[0.5px] border-transparent bg-background-secondary p-7 transition-colors hover:border-[0.5px] hover:border-text-darkGreen hover:duration-300"
    >
      <span className="text-sm text-text-lightGreen">{item.itemYear}</span>
      <Heading as="h4">{item.itemTitle}</Heading>
      <Row type="horizontal" className="gap-2">
        <GoDotFill className="text-text-lightGreen" size={10} />

        <span className="text-sm text-text-dark">{item.itemPlace}</span>
      </Row>
    </Row>
  );
}

export default EducationCard;
