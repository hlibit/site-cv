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
    <Row type="horizontal" className="mt-10 gap-6">
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
  );
}

export default SocialLinks;
