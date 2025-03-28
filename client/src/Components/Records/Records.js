import React from 'react'
import {useContext } from "react";
import { Data } from '../../Contex/WorkOutContex';

const Records = () => {
 
   
    const { workouts, deleteWorkout, toggleUpdate} = useContext(Data);

  return (
    <div>
        {workouts &&
        workouts.map((item) => {
          return (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <p>{item.reps}</p>
              <p>{item.loads}</p>
              <button onClick={() => toggleUpdate(item._id)}>Edit</button>{" "}
              <button onClick={() => deleteWorkout(item._id)}>Delete</button>
            </div>
          );
        })} 

    </div>
  )
}

export default Records