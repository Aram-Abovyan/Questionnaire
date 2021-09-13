import './info-page.css';
import { Button } from '../../components/Button';

export const InfoPage = ({ setShowRightAnswer }) => {

  return (
    <div className="info-page">
      <h1>Right answer</h1>
      <Button
        text="NEXT"
        clickHandler={() => {setShowRightAnswer(false)}}
      />
    </div>
  );
}