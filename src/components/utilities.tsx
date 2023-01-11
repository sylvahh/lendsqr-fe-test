import cardIcon1 from '../assets/card_icon-1.png';
import cardIcon2 from '../assets/card_icon-2.png';
import cardIcon3 from '../assets/card_icon-3.png';
import cardIcon4 from '../assets/card_icon-4.png';

// import React from 'react'

// const utilities = () => {
//   return (
//     <div>utilities</div>
//   )
// }

// export default utilities

export const toggler = (element: string, displayType: string) => {
  let Element = document.getElementById(element);

  // Element !== null && Element.style.display ='block'
  if (Element !== null) {
    Element.style.display = displayType;
  }
};

export const numberWithCommas = (num: number) => {
  return num === undefined ? null : num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const usersCardData = [
  {
    id: 1,
    title: 'users',
    icon: cardIcon1,
    amount: 2453,
  },

  {
    id: 2,
    title: 'active users',
    icon: cardIcon2,
    amount: 2453,
  },
  {
    id: 3,
    title: 'users with loan',
    icon: cardIcon3,
    amount: 12453,
  },
  {
    id: 4,
    title: 'users with savings',
    icon: cardIcon4,
    amount: 102453,
  },
];
