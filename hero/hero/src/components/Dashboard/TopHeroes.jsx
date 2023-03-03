import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './TopHeroes.css'
import { Menu } from "antd";

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
    <Menu>
    <ul className="TopHeroes">
        {HeroesTop.slice(0,4).map((heroes) =>{
          return(
            <li key={heroes.id} onClick = {() => HandleClick(heroes.id)}>
              <Menu.Item><div>{heroes.name}</div></Menu.Item>
            </li>
          )
        })}
      </ul>
      </Menu>
    </div>
  )
}

export default TopHeroes