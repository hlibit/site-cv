function CardsList({ data, gridCols, render }) {
  return (
    <div className={`grid grid-cols-${gridCols} gap-3 overflow-auto`}>
      {data.map(render)}
    </div>
  );
}

export default CardsList;
