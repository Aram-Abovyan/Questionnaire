import './question-page.css';
import { useState } from 'react';
import { backgroundImages } from '../../data/backgroundImages';
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
  };

  const getBgLeftByPageName = (pageName) => {
    return backgroundImages[`${pageName}BgLeft`];
  };

  const getBgRightByPageName = (pageName) => {
    return backgroundImages[`${pageName}BgRight`];
  }

  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem(pageName)));
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div className={pageName === 'ease' ? 'question-page-dark' : 'question-page-light'}>
      <Header
        left={<img className="header-logo" src={getLogoByPageName(pageName)} alt="Logo" />}
      />
      <img className="bg-left" src={getBgLeftByPageName(pageName)} alt="bg left" />
      <img className="bg-right" src={getBgRightByPageName(pageName)} alt="bg right" />
      {
        pageName === 'powercode' ? (<img className="bg-logo" src={backgroundImages.powercodeBgLogo} alt="bg logo" />) : ''
      }
      
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