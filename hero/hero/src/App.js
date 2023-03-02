import "./App.css";
import {React, useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Heroes from "./components/Heroes/Heroes";
import TopHeroes from "./components/Dashboard/TopHeroes";
import NewHeroes from "./components/NewHeroes/NewHeroes";
import Detail from "./components/Detail/Detail";
function App() {
  const [HeroesList, setHeroesList] = useState([
    {
      id: 1,
      name: "BomberMan",
      avatar:'https://toppng.com/uploads/preview/bomb-11523975386nromhfub6l.png',
      attack: 20,
      defense: 10,
    },
    {
      id: 2,
      avatar:'https://cdn5.vectorstock.com/i/1000x1000/46/09/container-plastic-coffee-avatar-character-vector-24834609.jpg',
      name: "PlasticMan",
      attack: 15,
      defense: 15,
    },
    {
      id: 3,
      avatar:'https://img.favpng.com/12/21/9/computer-icons-download-circle-avatar-png-favpng-D3s7QRzkHfPM9vGygjCsasd84.jpg',
      name: "Magneta",
      attack: 50,
      defense: 0,
    },
    {
      id: 4,
      avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Ddynamite&psig=AOvVaw27emqGxvaRKd4XSadeGnTW&ust=1677666101482000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCns7L_t_0CFQAAAAAdAAAAABAI',
      name: "Dynama",
      attack: 30,
      defense: 5,
    },
    {
      id: 5,
      avatar:'https://banner2.cleanpng.com/20180619/yag/kisspng-iq-test-intelligence-test-best-iq-test-iq-test-b-5b296743b13897.4761186715294400677259.jpg',
      name: "Dr. IQ",
      attack: 3,
      defense: 50,
    },
    {
      id: 6,
      avatar:'https://img.favpng.com/14/17/20/volcano-magma-rock-png-favpng-fs5CyqT6nkj2AUcg3XGTGDdFw.jpg',
      name: "Magma",
      attack: 5,
      defense: 15,
    },
    {
      id: 7,
      avatar:'https://w7.pngwing.com/pngs/715/174/png-transparent-celery-celeriac-malatang-vegetable-oenanthe-javanica-celery-leaf-vegetable-food-cooking-thumbnail.png',
      name: "Celeritas",
      attack: 10,
      defense: 0,
    },
  ]);



  useEffect(() => {
    const LocalStorageItems = JSON.parse(localStorage.getItem("Heroes"));
    if(LocalStorageItems === null){
    localStorage.setItem("Heroes", JSON.stringify(HeroesList));
  }
    else{
      setHeroesList(LocalStorageItems)
    }
  }, []);


  return (
    <Router>
      <div className="App">
        <h1 className="title">Tour of Heroes</h1>

        <ul className='navigation_bar'>

          <li>
            <NavLink to="/TopHeroes">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/Heroes">Heroes</NavLink>
          </li>
          <li>
            <NavLink to="/NewHeroes">New Hero</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/"/>
          <Route path="/TopHeroes" element={<TopHeroes />} />
          <Route path="/Heroes" element={<Heroes />} />
          <Route path="/NewHeroes" element={<NewHeroes />} />
          <Route path="/Details" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
