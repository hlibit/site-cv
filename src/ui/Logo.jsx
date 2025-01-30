import Heading from "./Heading";
import Row from "./Row";

function Logo() {
  return (
    <Row type="horizontal" className="text-text-primary">
      <Heading as="h2">kushii</Heading>
      <span className="text-text-lightGreen text-3xl font-extrabold">.</span>
    </Row>
  );
}

export default Logo;
