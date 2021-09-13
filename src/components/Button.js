import { useHistory } from "react-router";

export const Button = ({ text, pageName, clickHandler }) => {
  const history = useHistory();

  const handleClick = (pageName) => () => {
    history.push(`${pageName}-questions`);
  };

  return (
    <button
      onClick={pageName ? handleClick(pageName) : clickHandler}
      className="foodex-page-button"
    >
      {text}
    </button>
  );
}