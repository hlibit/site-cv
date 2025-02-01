import Row from "../../ui/Row";

function SkillsList({ children }) {
  return (
    <Row type="ul" className="gap-4">
      {children}
    </Row>
  );
}

export default SkillsList;
