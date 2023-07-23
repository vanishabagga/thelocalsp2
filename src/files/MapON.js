import React from "react";
import on from './onmap.png';
import { useNavigate } from 'react-router-dom';

function MapON() {
  const navigate = useNavigate();

  const handleExploreOttawa = () => {
    navigate('/exploreo');
  };

  const handleExploreToronto = () => {
    navigate('/explore');
  };

  const handleExploreMississauga = () => {
    navigate('/explorem');
  };

  const handleExploreNiagaraFalls = () => {
    navigate('/exploren');
  };

  return (
    <div>
      <img src={on} useMap="#image-map" alt="Map of Ontario" />

      {/* Image Map using imageimap.net*/}
      <map name="image-map">
        <area target="_self" alt="Ottawa" title="Ottawa" onClick={handleExploreOttawa} coords="1287,716,1573,772" shape="rect" />
        <area target="_self" alt="Toronto" title="Toronto" onClick={handleExploreToronto} coords="1121,887,1411,951" shape="rect" />
        <area target="_self" alt="Mississauga" title="Mississauga" onClick={handleExploreMississauga} coords="675,940,1108,992" shape="rect" />
        <area target="_self" alt="Niagara Falls" title="Niagara Falls" onClick={handleExploreNiagaraFalls} coords="1131,969,1522,1037" shape="rect" />
      </map>
    </div>
  );
}

export default MapON;



