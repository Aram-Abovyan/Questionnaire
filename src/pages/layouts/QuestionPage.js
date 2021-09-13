import './question-page.css';
import { useState } from 'react';
import bgLeft from '../../assets/images/question_page/powercode/bg-left.svg';
import bgRight from '../../assets/images/question_page/powercode/bg-right.svg';
import { Options } from "../../components/Options";
import { Header } from '../../components/Header';
import powercodeHeaderLogo from '../../assets/images/powercode_page/header-logo.svg';
import easeHeaderLogo from '../../assets/images/ease_page/header-logo.svg';
import foodexHeaderLogo from '../../assets/images/foodex_page/header-logo.svg';
import bgLogo from '../../assets/images/powercode_page/bg-logo.svg';

export const QuestionPage = ({ pageName }) => {
  const getLogoByPageName = (pageName) => {
    switch (pageName) {
      case 'ease':
        return easeHeaderLogo;
      
      case 'powercode':
        return powercodeHeaderLogo;

      case 'foodex':
        return foodexHeaderLogo;

      default:
        return;
    }
  }

  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem(pageName)));
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div className='powercode-questions'>
      <Header
        left={<img className="header-logo" src={getLogoByPageName(pageName)} alt="Logo" />}
      />
      <img className="bg-left" src={bgLeft} alt="bg left" />
      <img className="bg-right" src={bgRight} alt="bg right" />
      <img className="bg-logo" src={bgLogo} alt="bg logo" />
      <div className="option-container">
        <Options
          questions={questions}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          pageName={pageName}
        />
      </div>
      
    </div>
  );
};