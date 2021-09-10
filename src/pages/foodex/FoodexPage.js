import './foodex-page.css';
import smile from '../../assets/images/foodex_page/smile.svg';
import foodexLogo from '../../assets/images/foodex_page/foodex-logo.svg';
import foodexPageMessage from '../../assets/images/foodex_page/foodex-page-message.svg';
import { Button } from './Button';

export const FoodexPage = () => {
  return (
    <div className="foodex-page">
      <div className="background-head"></div>
      <div className="foodex-page-content">
        <img className="smile" src={smile} alt="smile" />
        <img className="foodex-logo" src={foodexLogo} alt="logo" />
        <img className="foodex-page-message" src={foodexPageMessage} alt="message" />
        <Button 
          text="LETS START"
        />
      </div>
    </div>
  );
};