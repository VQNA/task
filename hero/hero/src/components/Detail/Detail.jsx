import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Details.css'
import { Button, Descriptions} from 'antd';

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
          <Descriptions       
          column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
          >

          <Descriptions.Item label ="ID"> {Hero.id}</Descriptions.Item>
          <Descriptions.Item label ="Name"> {Hero.name}</Descriptions.Item>
          <Descriptions.Item label ="Attack"> {Hero.attack}</Descriptions.Item>
          <Descriptions.Item label ="Defense"> {Hero.defense}</Descriptions.Item>
          </Descriptions>
          <Button onClick={() => navigate(-1)}>Back</Button>

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