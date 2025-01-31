import Row from "../../ui/Row";

function SkillsList({ children }) {
  return (
    <Row type="ul" className="gap-5 pl-5">
      {children}
    </Row>
  );
}

export default SkillsList;
