export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="foodex-page-button"
    >
      {text}
    </button>
  );
}