import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Details.css'
const Detail = () => {
  const [Heroes, setHeroes] = useState([])
  const [Target, setTarget] = useState()
  const navigate = useNavigate();

  
  useEffect(() => {
    const LS_items = JSON.parse(localStorage.getItem("Heroes"));
    const LS_target = JSON.parse(localStorage.getItem("TargetHeroes"));
    
    setTarget(LS_target);
    setHeroes(LS_items);
 
    
  }, []);
  

  
  return (
    <div>
      {Heroes.filter(valid => valid.id === Target).map((Hero) =>{
        return (
          <>
          <div className="HeroDetails">
          <div className="HeroInformation">
          <h4>{Hero.name} Details</h4>

          <li>ID: {Hero.id}</li>
          <li>Name: {Hero.name}</li>
          <li>Attack: {Hero.attack}</li>
          <li>Defense: {Hero.defense}</li>
          <button onClick={() => navigate(-1)}>Back</button>

          </div>
          <div className="HeroImage">
          <img src={Hero.avatar} alt="avatar_images"/>
          </div>          
          </div>

          </>
        )
      })}

    </div>
  )
}

export default Detail