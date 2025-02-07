import Row from "../../ui/Row";

function SkillsList({ children }) {
  return (
    <Row type="ul" className="gap-3">
      {children}
    </Row>
  );
}

export default SkillsList;
