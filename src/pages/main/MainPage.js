import './main-page.css';
import ease from '../../assets/images/main_page/easeSpaceShip.svg';
import foodex from '../../assets/images/main_page/foodexSpaceShip.svg';
import powercode from '../../assets/images/main_page/powercodeSpaceShip.svg';
import catchArea from '../../assets/images/main_page/catchArea.svg';
import { Svg } from "./Svg";
import { Header } from "../../components/Header";
import Draggable from 'react-draggable'; // The default

export const MainPage = () => {

  const stopHandler = (event) => {
    // console.log('pageX', event.pageX);
    // console.log('pageY', event.pageY);
    // console.log('clientX', event.clientX);
    // console.log('clientY', event.clientY);

    const catchAreaElement = document.querySelector('.catch-area');
    console.dir(catchAreaElement);
  }

  return (
    <div className="main-page">
      <Header
        middle={
         <div
           className="catch-area"
         >
           <img src={catchArea} />
         </div>
        }
      />

      <Draggable
          onStop={stopHandler}
      >
        <div className="handle">
          <img src={ease} />
        </div>
      </Draggable>

      <Draggable
        onStop={stopHandler}
      >
        <div className="handle">
          <img src={foodex} />
        </div>
      </Draggable>

      <Draggable
        onStop={stopHandler}
      >
        <div className="handle">
          <img src={powercode} />
        </div>
      </Draggable>
    </div>
  );
};