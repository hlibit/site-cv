function AboutDetail({ label, children }) {
  return (
    <div className="mx-auto flex flex-col-reverse md:mx-0 md:flex-row md:items-center md:gap-5">
      <div className="text-sm text-text-dark">{label}</div>
      <div className="text-lg tracking-wider text-text-primary transition-colors hover:text-text-lightGreen hover:duration-300">
        {children}
      </div>
    </div>
  );
}

export default AboutDetail;
