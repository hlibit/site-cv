import Row from "../../ui/Row";
import { GoDotFill } from "react-icons/go";

function SkillItem() {
  return (
    <Row type="li" className="gap-3">
      <GoDotFill className="text-text-lightGreen" size={10} />
      <div className="text-stadart text-text-primary">skill;</div>
    </Row>
  );
}

export default SkillItem;
