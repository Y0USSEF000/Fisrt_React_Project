import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {AddAnimal} from '../Config/action'

const Formulaire = () => {
  const [animaltype , setanimaltype] = useState('')
  const [animalage , setanimalage] = useState('')
  const [animalstatue , setanimalstatue] = useState('')
  const [animalsex , setanimalsex] = useState('')
  const [username , setusername] = useState('')

  const ArrayTypeAnimal = [ 'search for your animal' ,"cat", "dog", "fish", "hamster", "horse"];
  const ArrayageAnimal = [
    'Look for the age of your animal',
    "baby animal",
    "a small animal",
    "Average animal",
    "large animal",
    "an old animal",
  ];
  const ArrayanimalStatue = [
    'Look for the Health for your animal',
    "good",
    "A common disease",
    "A difficult illness",
    "disabled",
  ];
  const Arrayanimalgenus = [
    'Search for the sex of your animal','Male' , 'Female'
  ]

  const count = useSelector(data=>data.Array_Animal.length)
  const dispatch = useDispatch()
  const handleAddAnimal = () => {
    dispatch(AddAnimal({
      id : count + 1 ,
      Animal_type : animaltype,
      Animal_Age : animalage,
      Animal_Status :animalstatue,
      Animal_Sex :animalsex,
      User_Name : username,

    }))
  };

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

      <button className='button'onClick={handleAddAnimal}>
        <Link to="/Listanimal">OK</Link>
      </button>
    </div>
  );
};

export default Formulaire;
