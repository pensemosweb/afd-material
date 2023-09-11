export default function Square({ value, onSquareClick }) {
  return (
    <button
      style={buttonStyles}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

const buttonStyles = {
  paddingBlock: "0.5rem",
  paddingInline: "0.5rem",
  borderBlock: "1px solid black",
  borderInline: "1px solid black",
  inlineSize: "1rem",
  blockSize: "1rem",
  boxSizing: 'content-box',
  cursor: 'pointer'
}