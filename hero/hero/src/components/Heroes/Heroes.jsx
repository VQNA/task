import { React, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Heroes.css'

const Heroes = () => {
  const [HeroesList, setHeroesList] = useState([]);
  const [Target, setTarget] = useState()
  const [Search, setSearch] = useState("")
  const navigate = useNavigate()
  const renderedHeroList = HeroesList.filter(
    (hero) => {
      return Object.values(hero).join('').includes(Search)
    }
  );
  useEffect(() => {
    const LocalStorageItems = JSON.parse(localStorage.getItem("Heroes"));
    setHeroesList(LocalStorageItems)
  }, []);
  useEffect(() => {
    console.log(Search)
  }, [Search]);

  function HandleClick(id){
    setTarget(id)
  
  }
  useEffect(() => {
    if(Target !== undefined){
    localStorage.setItem("TargetHeroes", JSON.stringify(Target));
    navigate('/Details')}
  }, [Target])

  return (
    <div className="Main">
      <h2>My Heroes</h2>
      <input placeholder="Search for hero:" onChange={(e)=>setSearch(e.target.value)}></input>
      <ul  className="HeroesList">
        {renderedHeroList.map((heroes) => {
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
