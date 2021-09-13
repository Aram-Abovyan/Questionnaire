import { useHistory } from "react-router";

export const Button = ({ text, pageName }) => {
  const history = useHistory();

  const handleClick = (pageName) => () => {
    history.push(`${pageName}-questions`);
  };

  return (
    <button
      onClick={handleClick(pageName)}
      className="foodex-page-button"
    >
      {text}
    </button>
  );
}