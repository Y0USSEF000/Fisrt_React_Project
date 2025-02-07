import React from "react";
import "./Listanimal.css";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import {DeleteAnimal} from '../Config/action'

export default function PageAffichage() {
  const Addanimalstore = useSelector(state => state.Array_Animal); 
  const dispatch = useDispatch()
  const handelDelete = (id)=>{
    dispatch(DeleteAnimal(id))
  }
  return (
    <div className="formullerr">
      <h1 style={{color : 'white'}}>All Animals</h1>
      {Addanimalstore.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Animal Type</th>
              <th>Animal Age</th>
              <th>Health Status</th>
              <th>animal genus</th>
              <th>Name</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody name="id">
            {Addanimalstore.map((animal , index) => (
              <tr name='update' key={index}>
                <td>{animal.Animal_type}</td>
                <td>{animal.Animal_Age}</td>
                <td>{animal.Animal_Status}</td>
                <td> 
                    {animal.Animal_Sex === 'Male' ? (
                     <img src='./image/male.jpg' alt="male" />
                    ) : animal.Animal_Sex === 'Female' ? (
                    <img src='./image/female.webp' alt="female" />
                    ) : null }
                    </td>
                    <td>{animal.User_Name}</td>
                    <td>
                      <Link to={`/update/${animal.id}`}><button className="btnbtn" style={{backgroundColor : 'darkgreen'}}>Update</button></Link>
                        <button className="btnbtn" style={{backgroundColor : 'darkred'}} onClick={()=>handelDelete(animal.id)} >Delete</button>
                    </td>

                
                

              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No animals added yet.</p>
      )}

      <button className="button">
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
}
