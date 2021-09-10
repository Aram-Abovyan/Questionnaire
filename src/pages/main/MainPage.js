import './main-page.css';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ease from '../../assets/images/main_page/easeSpaceShip.svg';
import foodex from '../../assets/images/main_page/foodexSpaceShip.svg';
import powercode from '../../assets/images/main_page/powercodeSpaceShip.svg';
import catchArea from '../../assets/images/main_page/catchArea.svg';
import { Header } from "../../components/Header";
// import Draggable from 'react-draggable';
import { gsap, Draggable } from "gsap/all";


gsap.registerPlugin(Draggable);

export const MainPage = () => {

  const history = useHistory();

  useEffect(() => {
    const tl = gsap.timeline()
    .to('.handle', {
      x: 'random(-20, 20, 5)',
      y: 'random(-20, 20, 5)',
      duration:1,
      ease:"none",
      repeat:-1,
      repeatRefresh:true
    });

    Draggable.create(".handle",
      {
        type:"x,y",
        edgeResistance:0.65,
        inertia:true,
        onDragEnd,
      });
  });

  const onDragEnd = (event) => {
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
           <img src={catchArea} alt="catch area"/>
         </div>
        }
      /> 

      <div className="spaceship-top-area">
        <div className="handle" data-category="foodex" >
          <img src={foodex} alt="foodex" />
        </div>
      </div>

      <div className="spaceship-bottom-area">
        <div id="powercode" className="handle" data-category="powercode" >
          <img src={powercode} alt="powercode" />
        </div>

        <div id="ease" className="handle" data-category="ease" >
          <img src={ease} alt="ease" />
        </div>
      </div>
      
    </div>
  );
};