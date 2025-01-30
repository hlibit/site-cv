import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import SocialLinks from "./SocialLinks";

function Legend() {
  return (
    <Row type="vertical" className="max-w-[50%]">
      <Heading as="h6">Front-End Developer</Heading>
      <Heading as="h0">Вітаю, Я</Heading>
      <Heading as="h0">
        <span className="text-text-lightGreen">Гліб Мазаєв</span>
      </Heading>
      <div className="mt-6 max-w-[80%] text-sm font-light leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate
        est voluptatem necessitatibus, ipsam consequuntur voluptatum alias magni
        labore, expedita beatae voluptate ducimus iure!
      </div>
      <SocialLinks />
    </Row>
  );
}

export default Legend;
