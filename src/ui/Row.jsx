function Row({ className: userClasses, type = "vertical", children }) {
  if (type === "vertical")
    return (
      <div className={`flex flex-col justify-center ${userClasses}`}>
        {children}
      </div>
    );
  if (type === "horizontal")
    return <div className={`flex items-center ${userClasses}`}>{children}</div>;
  if (type === "nav")
    return <nav className={`flex items-center ${userClasses}`}>{children}</nav>;
  if (type === "ul")
    return <ul className={`flex flex-col ${userClasses}`}>{children}</ul>;
  if (type === "li")
    return <li className={`flex items-center ${userClasses}`}>{children}</li>;
}

export default Row;
