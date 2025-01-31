const asObj = {
  h0: "text-7xl font-normal",
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h5: "text-xl font-medium",
  h6: "text-lg font-normal",
  h1Thin: "text-4xl font-normal",
};

function Heading({ as, children }) {
  return <div className={asObj[as] + " text-text-primary"}>{children}</div>;
}

export default Heading;
