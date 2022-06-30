const PrevArrow = ({ className, onClick, style }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

export default PrevArrow;
