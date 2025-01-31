import Row from "../../ui/Row";

const hoverStyles =
  "after:absolute after:bottom-0 after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-text-darkGreen after:transition-all after:duration-300 hover:scale-105 hover:transition-all hover:duration-300 hover:after:w-full";

function ContactBlock({ image, href, label, children }) {
  return (
    <Row type="horizontal" className="gap-6 px-3 outline-2">
      <Row
        type="horizontal"
        className="h-20 w-20 justify-center rounded-md bg-background-secondary text-text-darkGreen"
      >
        {image}
      </Row>
      <Row>
        <span className="text-text-dark">{label}</span>
        {href ? (
          <a
            href={href}
            rel="noopener noreferrer"
            className={`relative text-text-primary ${hoverStyles}`}
          >
            {children}
          </a>
        ) : (
          <span className={`relative text-text-primary ${hoverStyles}`}>
            {children}
          </span>
        )}
      </Row>
    </Row>
  );
}

export default ContactBlock;
