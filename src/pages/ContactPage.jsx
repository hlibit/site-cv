import ContactBlock from "../components/contactPageComps/ContactBlock";
import Row from "../ui/Row";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedBox from "../ui/AnimatedBox";

function ContactPage() {
  return (
    <Row type="horizontal" className="justify-between">
      <AnimatedBox delay={0.5}>
        <ContactBlock
          label="Телефон"
          href="tel:+380673760282"
          image={<FaPhoneAlt size={30} />}
        >
          +38 (067) 376 02 82
        </ContactBlock>
      </AnimatedBox>
      <AnimatedBox delay={0.8}>
        <ContactBlock
          label="Пошта"
          href="mailto:hlibm2001@gmail.com"
          image={<IoMail size={38} />}
        >
          hlibm2001@gmail.com
        </ContactBlock>
      </AnimatedBox>
      <AnimatedBox delay={0.3}>
        <ContactBlock label="Адреса" image={<FaLocationDot size={38} />}>
          Україна, Київ
        </ContactBlock>
      </AnimatedBox>
    </Row>
  );
}

export default ContactPage;
