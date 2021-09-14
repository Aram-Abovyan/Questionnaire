import '../foodex/foodex-page.css';
import '../ease/ease-page.css';
import './starting-page.css';
import '../powercode/powercode-page.css';
import smile from '../../assets/images/smile.svg';
import foodexLogo from '../../assets/images/foodex_page/foodex-logo.svg';
import easeLogo from '../../assets/images/ease_page/ease-logo.svg';
import powercodeLogo from '../../assets/images/powercode_page/powercode-logo.svg';
import pageMessageDark from '../../assets/images/page-message-dark.svg';
import pageMessageLight from '../../assets/images/page-message-light.svg';

import { Button } from '../../components/Button';

export const StartingPage = ({ pageName, buttonText, clickHandler, message }) => {
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

  const getMessageSvgByPageName = (pageName) => {
    switch (pageName) {
      case 'foodex-page':
        return pageMessageDark;

      case 'ease-page':
        return pageMessageLight;

      case 'powercode-page':
        return pageMessageLight;

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
        <img className="page-message" src={message ? message : getMessageSvgByPageName(pageName)} alt="message" />
        <Button 
          text={buttonText ? buttonText : 'LETS START'}
          pageName={pageName}
          clickHandler={clickHandler ? clickHandler : ''}
        />
      </div>
    </div>
  );
};