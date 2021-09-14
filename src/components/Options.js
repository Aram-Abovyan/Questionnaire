import { useState } from 'react';
import modalEmoji from '../assets/images/modal_window/modal-emoji.svg';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/Button';
import { InfoPage } from '../pages/layouts/InfoPage';
import { useHistory } from 'react-router';
import '../pages/layouts/question-page.css';

export const Options = ({ questions, questionIndex, setQuestionIndex, pageName }) => {
  const currentQuestion = questions.find((question, index) => index === questionIndex);
  const corectAnswer = currentQuestion.options.findIndex(({ isCorect }) => isCorect );
  const [checkedId, setCheckedId] = useState('');
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const history = useHistory();

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
        history.push(`/${pageName}`)
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
            setShowRightAnswer={setShowRightAnswer}
          />
        </>) : ''
      }
      
      <div className="question">
        {currentQuestion.question}
      </div>
      <div className="options">
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