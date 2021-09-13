import './question-page.css';
import '../powercode/powercode-page.css';
import bgLeft from '../../assets/images/question_page/powercode/bg-left.svg';
import bgRight from '../../assets/images/question_page/powercode/bg-right.svg';
import { Options } from "../../components/Options";
import { Header } from '../../components/Header';
import headerLogo from '../../assets/images/powercode_page/header-logo.svg';
import bgLogo from '../../assets/images/powercode_page/bg-logo.svg';

export const QuestionPage = () => {
  return (
    <div className='powercode-questions'>
      <Header
        left={<img className="header-logo" src={headerLogo} alt="Logo" />}
      />
      <img className="bg-left" src={bgLeft} alt="bg left" />
      <img className="bg-right" src={bgRight} alt="bg right" />
      <img className="bg-logo" src={bgLogo} alt="bg logo" />
      <Options />
    </div>
  );
};