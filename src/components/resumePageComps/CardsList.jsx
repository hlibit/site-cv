function CardsList({ data, className: userClass, render }) {
  return (
    <div
      className={`grid ${userClass || ""} h-[300px] gap-3 overflow-auto lg:h-auto`}
    >
      {data.map(render)}
    </div>
  );
}

export default CardsList;
