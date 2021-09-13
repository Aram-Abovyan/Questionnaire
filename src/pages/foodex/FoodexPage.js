import { StartingPage } from '../layouts/StartingPage';
import { useLocation } from 'react-router-dom';

export const FoodexPage = () => {
  console.log(useLocation())
  return (
    <StartingPage pageName="foodex-page" />
  );
};