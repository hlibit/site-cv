import Row from "../../ui/Row";
import { GoDotFill } from "react-icons/go";

function SkillItem({ skill }) {
  return (
    <Row type="li" className="gap-3">
      <GoDotFill className="text-text-lightGreen" size={10} />
      <div className="text-stadart text-text-primary transition-colors hover:text-text-lightGreen hover:duration-300">
        {skill}{" "}
      </div>
    </Row>
  );
}

export default SkillItem;
