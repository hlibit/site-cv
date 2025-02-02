import Row from "../../ui/Row";

const hoverStyles =
  "after:absolute after:bottom-0 after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-text-darkGreen after:transition-all after:duration-300 hover:scale-105 hover:transition-all hover:duration-300 hover:after:w-full";

function ContactBlock({ image, href, label, children }) {
  return (
    <Row type="horizontal" className="gap-6">
      <Row
        type="horizontal"
        className="h-12 w-12 justify-center rounded-md bg-background-secondary text-text-darkGreen sm:h-20 sm:w-20"
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
