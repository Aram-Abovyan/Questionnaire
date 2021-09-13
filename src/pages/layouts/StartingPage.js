import '../foodex/foodex-page.css';
import '../ease/ease-page.css';
import './starting-page.css';
import '../powercode/powercode-page.css';
import smile from '../../assets/images/smile.svg';
import foodexLogo from '../../assets/images/foodex_page/foodex-logo.svg';
import easeLogo from '../../assets/images/ease_page/ease-logo.svg';
import powercodeLogo from '../../assets/images/powercode_page/powercode-logo.svg';
import pageMessage from '../../assets/images/page-message.svg';
import { Button } from '../../components/Button';

export const StartingPage = ({ pageName }) => {
  const getLogoByPageName = (pageName) => {
    switch (pageName) {
      case 'foodex-page':
        return foodexLogo;

      case 'ease-page':
        return easeLogo;

      case 'powercode-page':
        return powercodeLogo;

      default:
        return;
    }
  };
  
  return (
    <div className={pageName}>
      <div className="background-head"></div>
      <div className="page-content">
        <img className="smile" src={smile} alt="smile" />
        <img
          className="starting-page-logo"
          src={getLogoByPageName(pageName)}
          alt="logo"
        />
        <img className="page-message" src={pageMessage} alt="message" />
        <Button 
          text="LETS START"
          pageName={pageName}
        />
      </div>
    </div>
  );
};