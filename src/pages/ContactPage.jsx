import ContactBlock from "../components/contactPageComps/ContactBlock";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import AnimatedBox from "../ui/AnimatedBox";

function ContactPage() {
  return (
    <main className="my-auto flex w-full max-w-[1000px]">
      <div className="mx-auto block space-y-10 lg:mx-0 lg:flex lg:w-full lg:flex-row lg:flex-wrap lg:justify-between lg:gap-4 lg:space-y-0">
        <AnimatedBox delay={0.5}>
          <ContactBlock
            label="Телефон"
            href="tel:+380673760282"
            image={<FaPhoneAlt className="h-5 w-5 sm:h-8 sm:w-8" />}
          >
            +38 (067) 376 02 82
          </ContactBlock>
        </AnimatedBox>
        <AnimatedBox delay={0.8}>
          <ContactBlock
            label="Пошта"
            href="mailto:hlibm2001@gmail.com"
            image={<IoMail className="h-5 w-5 sm:h-8 sm:w-8" />}
          >
            hlibm2001@gmail.com
          </ContactBlock>
        </AnimatedBox>
        <AnimatedBox delay={0.3}>
          <ContactBlock
            label="Адреса"
            image={<FaLocationDot className="h-5 w-5 sm:h-8 sm:w-8" />}
          >
            Україна, Київ
          </ContactBlock>
        </AnimatedBox>
      </div>
    </main>
  );
}

export default ContactPage;
