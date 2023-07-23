import React from 'react';
import MapON from './MapON';
import Navbar from './Navbar';

const MainOne = () => {
  return (
    <div>
      <Navbar showMainLink={true} showDropdown={true} />
      <div>
        <h1 className="my-5">Where are you visiting?</h1>
      </div>
      <MapON />
    </div>
  );
};

export default MainOne;


