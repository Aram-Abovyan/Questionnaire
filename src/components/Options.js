import { useState } from 'react';
import modalEmoji from '../assets/images/modal_window/modal-emoji.svg';
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
          <div className="modal-window">
            <img className="modal-emoji" src={modalEmoji} alt="emoji" />
            <p className="modal-text">Alas... The answer is wrong</p>
            <a href={`/${pageName}`}>Let's try again</a>
          </div>
          <div className="blocked-background"></div>
        </>) : ''
      }

      {
        showRightAnswer ? (<>
          <InfoPage
            image={getInfoImageByPageNameAndIndex(pageName, questionIndex - 1)}
            setShowRightAnswer={setShowRightAnswer}
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