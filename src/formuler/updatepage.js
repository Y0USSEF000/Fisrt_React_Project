import React from "react";
import { Link, useParams } from "react-router-dom"; 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {UpdateAnimal} from '../Config/action'

import "./App.css";

const Updatepage = () => {
  const {id}=useParams()
  const count = useSelector(data=>data.Array_Animal.find((u)=>u.id===parseInt(id)))
  const [animaltype , setanimaltype] = useState(count.Animal_type)
    const [animalage , setanimalage] = useState(count.Animal_Age)
    const [animalstatue , setanimalstatue] = useState(count.Animal_Status)
    const [animalsex , setanimalsex] = useState(count.Animal_Sex)
    const [username , setusername] = useState(count.User_Name)
    
  const dispatch = useDispatch()
  const handleUpdateAnimal = () => {
    dispatch(UpdateAnimal({
      id : id ,
      Animal_type : animaltype,
      Animal_Age : animalage,
      Animal_Status :animalstatue,
      Animal_Sex :animalsex,
      User_Name : username,

    }))
  };
 

  const ArrayTypeAnimal = [
    "search for your animal",
    "cat",
    "dog",
    "fish",
    "hamster",
    "horse",
  ];
  const ArrayageAnimal = [
    "Look for the age of your animal",
    "baby animal",
    "a small animal",
    "Average animal",
    "large animal",
    "an old animal",
  ];
  const ArrayanimalStatue = [
    "Look for the Health for your animal",
    "good",
    "A common disease",
    "A difficult illness",
    "disabled",
  ];
  const Arrayanimalgenus = ["Search for the sex of your animal", "Male", "Female"];

 

  
  return (
     <div className="formuller">
           <h1 className="element">Ajoutez votre animal</h1>
     
           <div className="element">
             <label>Animal type :</label>
             <select value={animaltype} onChange={(e)=>setanimaltype(e.target.value)}> 
               {ArrayTypeAnimal.map((e) => (
                 <option className="option"  value={e}>
                   {e}
                 </option>
               ))}
             </select>
           </div>
     
           <div className="element">
             <label>Animal age :</label>
             <select value={animalage} onChange={(e)=>setanimalage(e.target.value)} >
               {ArrayageAnimal.map((e) => (
                 <option className="option"  value={e}>
                   {e}
                 </option>
               ))}
             </select>
           </div>
     
           <div className="element">
             <label>The animal health status :</label>
             <select value={animalstatue} onChange={(e)=>setanimalstatue(e.target.value)}>
               {ArrayanimalStatue.map((e) => (
                 <option className="option"  value={e}>
                   {e}
                 </option>
               ))}
             </select>
           </div>
           <div className="element">
             <label>The sex of your animal:</label>
             <select value={animalsex} onChange={(e)=> {setanimalsex(e.target.value)}}>
               {Arrayanimalgenus.map((e) => (
                 <option className="option"  value={e}>
                   {e}
                 </option>
               ))}
             </select>
           </div>
     
           <div className="element">
             <label>Your name :</label>
             <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} />
           </div>
     
           <button className='button'onClick={handleUpdateAnimal}>
             <Link to="/Listanimal">OK</Link>
           </button>
         </div>
    );
  };

export default Updatepage; 