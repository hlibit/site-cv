import Row from "../../ui/Row";

function AboutDetail({ label, children }) {
  return (
    <Row type="horizontal" className="gap-5">
      <div className="text-sm text-text-dark">{label}</div>
      <div className="text-lg tracking-wider text-text-primary transition-colors hover:text-text-lightGreen hover:duration-300">
        {children}
      </div>
    </Row>
  );
}

export default AboutDetail;
