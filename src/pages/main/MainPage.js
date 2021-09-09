import './main-page.css';
import ease from '../../assets/images/main_page/easeSpaceShip.svg';
import foodex from '../../assets/images/main_page/foodexSpaceShip.svg';
import powercode from '../../assets/images/main_page/powercodeSpaceShip.svg';
import catchArea from '../../assets/images/main_page/catchArea.svg';
import { Svg } from "./Svg";
import { Header } from "../../components/Header";
import Draggable from 'react-draggable'; // The default

export const MainPage = () => {

  return (
    <div className="main-page">
      <Header
        middle={
          <Svg
              svgComponent={catchArea}
          />
        }
      />

      <Draggable
          onStop={() => alert()}
      >
        <div className="handle">
          <img src={ease} />
        </div>
      </Draggable>

      <Draggable
        onStop={() => alert()}
      >
        <div className="handle">
          <img src={foodex} />
        </div>
      </Draggable>

      <Draggable
        onStop={() => alert()}
      >
        <div className="handle">
          <img src={powercode} />
        </div>
      </Draggable>
    </div>
  );
};