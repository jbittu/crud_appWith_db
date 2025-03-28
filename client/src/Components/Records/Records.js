import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

const Records = () => {
    //GET REQUEST
  const [workouts, setWorkouts] = useState(null); //state for geting data from the server

  const getWorkouts = async () => {
    const response = await axios.get("http://localhost:8000/api/workout");
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    setWorkouts(response.data);
  };
  useEffect(() => {
    getWorkouts();
  }, []);
  //POST REQUEST
  const [form, setForm] = useState({
    title: "",
    reps: "",
    loads: "",
  });
  const handleFormFiel = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const createWorkoutData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/workout", form);
    // console.log(response.data);
    getWorkouts();
    setForm({ title: "", reps: "", loads: "" });
  };

  //DELETE REQUEST
  const deleteWorkout = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/workout/${id}`);

      getWorkouts();
    } catch (err) {
      console.error(err);
    }
  };

  //UPDATE REQUEST

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    reps: "",
    loads: "",
  });

  const handleUpdateForm = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };
  const toggleUpdate = async (id) => {
    const response = await axios.get(`http://localhost:8000/api/workout/${id}`);
    setUpdateForm(response.data);
  };
  const updateWorkoutData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/api/workout/${updateForm._id}`, updateForm);
      getWorkouts();
      setUpdateForm({ _id: null, title: "", reps: "", loads: "" });
    } catch (error) {
      console.error(error);
    }
  };
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