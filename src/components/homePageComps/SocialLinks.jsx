import Button from "../../ui/Button";
import Row from "../../ui/Row";
import { moveByOuterLink } from "../../utils/helpers";
import { HiOutlineDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="mt-8 flex flex-col gap-6 md:mt-4 lg:mt-7 lg:flex-row xl:mt-8">
      <Button
        type="outlined"
        hover={true}
        onClick={() => moveByOuterLink("https://www.youtube.com/")}
      >
        <Row type="horizontal" className="gap-2">
          Завантажити CV
          <span>
            <HiOutlineDownload size={20} />
          </span>
        </Row>
      </Button>
      {/* Social Links */}
      <Row type="horizontal" className="gap-6">
        <Button
          type="social"
          hover={true}
          onClick={() => moveByOuterLink("https://github.com/hlibit")}
        >
          <FaGithub size={16} />
        </Button>
        <Button
          type="social"
          hover={true}
          onClick={() =>
            moveByOuterLink("https://www.linkedin.com/in/kushii-hlib/")
          }
        >
          <FaLinkedinIn size={16} />
        </Button>
        <Button
          type="social"
          hover={true}
          onClick={() =>
            moveByOuterLink(
              "https://www.instagram.com/kushd1et?igsh=a2JrdXZwNWNqdDJ2&utm_source=qr",
            )
          }
        >
          <FaInstagram size={16} />
        </Button>
        <Button
          type="social"
          hover={true}
          onClick={() => moveByOuterLink("https://t.me/hlibbb")}
        >
          <FaTelegramPlane size={16} />
        </Button>
      </Row>
    </div>
  );
}

export default SocialLinks;
