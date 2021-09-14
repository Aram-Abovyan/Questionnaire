import './info-page.css';
import { Button } from '../../components/Button';
import bgLogo from '../../assets/images/powercode_page/bg-logo.svg';
import infoPageEmoji from '../../assets/images/info-page-emoji.svg';

export const InfoPage = ({ setShowRightAnswer, image, text, pageName }) => {

  return (
    <div className={`info-page ${pageName === 'ease' ? 'info-page-dark' : 'info-page-light'}`}>
      <div className="background-head"></div>
      {pageName === 'powercode' ? (<img className="bg-logo" src={bgLogo} alt="logo" />) : ''}
      <div className="info-page-content">
        <img className="info-page-emoji" src={infoPageEmoji} alt="info page emoji" />
        <p className="info-message">It's right!</p>

        <p className={pageName === 'ease' ? 'info-text-light' : 'info-text-dark'}>{text}</p>
        <img src={image} alt="" />
        <Button
          text="NEXT"
          clickHandler={() => {setShowRightAnswer(false)}}
        />
      </div>
    </div>
  );
}