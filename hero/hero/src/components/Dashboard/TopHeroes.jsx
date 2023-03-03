import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './TopHeroes.css'
const TopHeroes = () => {
  const [HeroesTop, setHeroesTop] = useState([])
  const [Target, setTarget] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const LS_items = JSON.parse(localStorage.getItem("Heroes"));
    setHeroesTop(LS_items);
  }, []);
  function HandleClick(id){
    setTarget(id)
  
  }
  useEffect(() => {
    if(Target !== undefined){
    localStorage.setItem("TargetHeroes", JSON.stringify(Target));
    navigate('/Details')}
  }, [Target])



  
  return (
    <div className='Main_board'>
    <h1>Top Heroes</h1>
    <ul className="TopHeroes">
        {HeroesTop.slice(0,4).map((heroes) =>{
          return(
            <li key={heroes.id} onClick = {() => HandleClick(heroes.id)}>
              <div>{heroes.name}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TopHeroes