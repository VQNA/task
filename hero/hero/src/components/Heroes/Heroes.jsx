import { React, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Heroes.css'

const Heroes = () => {
  const [HeroesList, setHeroesList] = useState([]);
  const [Target, setTarget] = useState()
  const navigate = useNavigate()
  
  useEffect(() => {
    const LocalStorageItems = JSON.parse(localStorage.getItem("Heroes"));
    setHeroesList(LocalStorageItems)
  }, []);


  function HandleClick(id){
    setTarget(id)
  
  }
  useEffect(() => {
    console.log(Target)
    if(Target !== undefined){
    localStorage.setItem("TargetHeroes", JSON.stringify(Target));
    navigate('/Details')}
  }, [Target])

  return (
    <div className="Main">
      <h2>My Heroes</h2>
      <ul  className="HeroesList">
        {HeroesList.map((heroes) => {
          return (
            <li key={heroes.id} onClick = {() => HandleClick(heroes.id)}> 
              <div className="HeroRanking">{HeroesList.map(object => object.id).indexOf(heroes.id) + 1}</div>
              <div className="HeroName">{heroes.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Heroes;
