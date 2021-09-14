import { useState } from 'react';
import powercodeModalEmoji from '../assets/images/powercode_page/wrong-emoji.svg';
import easeModalEmoji from '../assets/images/ease_page/wrong-emoji.svg';
import foodexModalEmoji from '../assets/images/foodex_page/wrong-emoji.svg';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/Button';
import { InfoPage } from '../pages/layouts/InfoPage';
import { useHistory } from 'react-router';
import '../pages/layouts/question-page.css';
import { infoImages } from '../data/infoImages';

export const Options = ({ questions, questionIndex, setQuestionIndex, pageName }) => {
  const currentQuestion = questions.find((question, index) => index === questionIndex);
  const corectAnswer = currentQuestion.options.findIndex(({ isCorect }) => isCorect );
  const [checkedId, setCheckedId] = useState('');
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const history = useHistory();

  const getInfoImageByPageNameAndIndex = (pageName, questionIndex) => {
    return infoImages[`${pageName}${questionIndex}`];
  }

  const handleChange = (id) => () => {
    setCheckedId(id);
  }

  const getModalEmojiByPageName = (pageName) => {
    switch(pageName) {
      case 'ease':
        return easeModalEmoji;
      
      case 'foodex':
        return foodexModalEmoji;

      case 'powercode':
        return powercodeModalEmoji;

      default:
        return;
    }
  }

  const optionComponents = currentQuestion.options.map(({ value }, index) => (
    <li key={uuidv4()}><input
      id={index}
      type="checkbox"
      checked={checkedId === '' + index ? true : false}
      onChange={handleChange('' + index)}
    /> {value}</li>
  ));

  const clickHandler = () => {

    if ('' + corectAnswer === checkedId) {

      setShowRightAnswer(true);

      if (questionIndex === questions.length - 1) {
        history.push(`/${pageName}-completed`)
        return;
      }

      setQuestionIndex(++questionIndex);
      setCheckedId('');
      return;
    }
    setShowModalWindow(true);
  }

  return (
    <>
      {
        showModalWindow ? (<>
          <div className={`modal-window ${pageName === 'ease' ? 'modal-window-dark' : 'modal-window-light'}`}>
            <img className="modal-emoji" src={getModalEmojiByPageName(pageName)} alt="emoji" />
            <p className="modal-text">Alas... The answer is wrong</p>
            <a className={pageName === 'ease' ? 'modal-window-link-light' : ''} href={`/${pageName}`}>Let's try again</a>
          </div>
          <div className={`blocked-background ${pageName === 'ease' ? 'blocked-background-dark' : 'blocked-background-light'}`}></div>
        </>) : ''
      }

      {
        showRightAnswer ? (<>
          <InfoPage
            image={getInfoImageByPageNameAndIndex(pageName, questionIndex - 1)}
            setShowRightAnswer={setShowRightAnswer}
            text={currentQuestion.info}
            pageName={pageName}
          />
        </>) : ''
      }
      
      <div className={pageName === 'ease' ? 'question-light' : 'question-dark'}>
        {currentQuestion.question}
      </div>
      <div className={pageName === 'ease' ? 'options-light' : 'options-dark'}>
        <ul>
          {optionComponents}
        </ul>
      </div>
      <Button
        clickHandler={clickHandler}
        text="ANSWER"
      />
    </>
  );
}