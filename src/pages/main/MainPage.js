import './main-page.css';
import { useHistory } from "react-router-dom";
import ease from '../../assets/images/main_page/easeSpaceShip.svg';
import foodex from '../../assets/images/main_page/foodexSpaceShip.svg';
import powercode from '../../assets/images/main_page/powercodeSpaceShip.svg';
import catchArea from '../../assets/images/main_page/catchArea.svg';
import { Header } from "../../components/Header";
import Draggable from 'react-draggable';

// const defaultPositions = {
//   ease: {
//     x: 1000,
//     y: 600,
//   },

//   foodex: {

//   },

//   powercode: {

//   },
// };

export const MainPage = () => {
  const history = useHistory();

  const stopHandler = (event) => {
    const catchAreaElement = document.querySelector('.catch-area');
    const catchAreaCoordinates = catchAreaElement.getBoundingClientRect();

    const spaceShipCoordinates = event.target.getBoundingClientRect();

    if (spaceShipCoordinates.right < catchAreaCoordinates.left || spaceShipCoordinates.left > catchAreaCoordinates.right) return;
    if (spaceShipCoordinates.top > catchAreaCoordinates.bottom || spaceShipCoordinates.bottom < catchAreaCoordinates.top) return;

    switch (event.target.dataset.category) {
      case 'ease':
        history.push('/ease');
        break;
      
      case 'foodex':
        history.push('/foodex');
        break;
      
      case 'powercode':
        history.push('/powercode');
        break;
      
      default:
    }
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
        <div className="handle" data-category="ease" >
          <img src={ease} />
        </div>
      </Draggable>

      <Draggable
        onStop={stopHandler}
      >
        <div className="handle" data-category="foodex" >
          <img src={foodex} />
        </div>
      </Draggable>

      <Draggable
        onStop={stopHandler}
      >
        <div className="handle" data-category="powercode" >
          <img src={powercode} />
        </div>
      </Draggable>
    </div>
  );
};