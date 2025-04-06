import React from "react";
import { useContext } from "react";
import { Data } from "../../Context/WorkOutContex";
import "./Records.css";

const Records = () => {
  const { workouts, deleteWorkout, toggleUpdate } = useContext(Data);

  return (
    <div className="records-container">
      {workouts &&
        workouts.map((item) => {
          return (
            <div className="records" key={item._id}>
              <h2>Exercise: {item.title}</h2>
              <p>Reps: {item.reps}</p>
              <p>Load (in KG): {item.loads}</p>
              <div className="btns-container">
                <button className="btns" onClick={() => toggleUpdate(item._id)}>
                  Edit
                </button>{" "}
                <button
                  className="btns"
                  onClick={() => deleteWorkout(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Records;
