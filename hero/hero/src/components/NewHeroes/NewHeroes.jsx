import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewHeroes.css";
import { Button, Input, Image, InputNumber, Form } from 'antd';
import 'antd/dist/reset.css';

const NewHeroes = () => {
  const [Hero, setHero] = useState([]);
  const [NewHero, SetNewHero] = useState(false);
  const [Avatar, SetAvatar] = useState();
  const [Name, setName] = useState();
  const [Atk, setAtk] = useState();
  const [Def, setDef] = useState();
  const [Local, setLocal] = useState(true);

  const navigate = useNavigate();
  function HandleSubmit(e) {
    e.preventDefault();
    

      setHero((oldList) => [
        ...oldList,
        {
          id: Math.floor(Math.random(8, 20000000) * 1000),
          name: Name,
          avatar: Avatar,
          attack: Atk,
          defense: Def,
        },
      ]);
      console.log(Hero);
      SetNewHero(true);
    
    // setHero((original) => [...original, NewHero]);
    // localStorage.setItem("Heroes", JSON.stringify(Hero))
  }

  // function errorMsg() {
  //   var hasNumber = /\d/;
  //   if (hasNumber.test(Atk) === false || hasNumber.test(Def) === false) {
  //     setError(true);
  //     setErrorMsg("please enter numbers only");
  //   }
  // }

  useEffect(() => {
    const LS_items = JSON.parse(localStorage.getItem("Heroes"));
    setHero(LS_items);
  }, []);

  function ChangeSource(e){
    e.preventDefault()
    setLocal(!Local)
  }

  useEffect(() => {
    if (NewHero) {
      localStorage.setItem("Heroes", JSON.stringify(Hero));
      SetNewHero(!Hero);
      navigate("/Heroes");
    }
  }, [Hero]);

  return (
    <div className="NewHeroForm">
      <h1>New Hero Details</h1>
      <Form className="NewForm">
        <div className="information">
          <div className="input_field">
            <h4>Hero name:</h4>
            <Input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input_field">
            <h4>Attack:</h4>
            <InputNumber
              onChange={(e) => {
                setAtk(e.target.value);
              }}
            />
          </div>
          <div className="input_field">
            <h4>Defense:</h4>
            <InputNumber
            controls = "false"
              onChange={(e) => {
                setDef(e.target.value);
              }}
            />
          </div>

          {/* Avatar field */}
          <Button type = "primary" shape="round" size="normal" onClick={ChangeSource} className="Btn">Switch source</Button>
          {Local ? (
            <div className="input_field">
              <h4>Avatar link:</h4>
              <Input
                type="text"
                onChange={(e) => {
                  SetAvatar(e.target.value);
                }}
              />
            </div>
          ) : (
            <div className="input_field" >
              <h4>Upload File:</h4>
              <input
                type="file"
                onChange={(e) => {
                  SetAvatar(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>
          )}

          

          <Button type = "primary" shape="round" className="Btn" onClick={HandleSubmit}>Submit</Button>
        </div>
        <div className="PreviewImage">
          {Avatar ? <h4>Preview Image:</h4> : ""}
          {Avatar ? <Image src={Avatar} alt="Image Not Found" className="SampleImage" /> : ""}
        </div>
      </Form>
    </div>
  );
};

export default NewHeroes;
