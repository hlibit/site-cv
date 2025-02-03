function CardsList({ data, className: userClass, render }) {
  return (
    <div
      className={`grid ${userClass || ""} max-h-[300px] gap-3 overflow-auto`}
    >
      {data.map(render)}
    </div>
  );
}

export default CardsList;
