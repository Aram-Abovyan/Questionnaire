import './info-page.css';
import { Button } from '../../components/Button';
import bgLogo from '../../assets/images/powercode_page/bg-logo.svg';
import infoPageEmoji from '../../assets/images/info-page-emoji.svg';

export const InfoPage = ({ setShowRightAnswer, image, text }) => {

  return (
    <div className="info-page">
      <div className="background-head"></div>
      <img className="bg-logo" src={bgLogo} alt="logo" />
      <div className="info-page-content">
        <img className="info-page-emoji" src={infoPageEmoji} alt="info page emoji" />
        <p>It's right!</p>
        <Button
          text="NEXT"
          clickHandler={() => {setShowRightAnswer(false)}}
        />
      </div>
    </div>
  );
}