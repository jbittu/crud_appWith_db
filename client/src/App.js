import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  // //GET REQUEST
  // // const [workouts, setWorkouts] = useState(null); //state for geting data from the server

  // // const getWorkouts = async () => {
  // //   const response = await axios.get("http://localhost:8000/api/workout");
  // //   if (response.status !== 200) {
  // //     throw new Error("Failed to fetch data");
  // //   }
  // //   setWorkouts(response.data);
  // // };
  // // useEffect(() => {
  // //   getWorkouts();
  // // }, []);
  // //POST REQUEST
  // const [form, setForm] = useState({
  //   title: "",
  //   reps: "",
  //   loads: "",
  // });
  // const handleFormFiel = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  // const createWorkoutData = async (e) => {
  //   e.preventDefault();
  //   await axios.post("http://localhost:8000/api/workout", form);
  //   // console.log(response.data);
  //   getWorkouts();
  //   setForm({ title: "", reps: "", loads: "" });
  // };

  // //DELETE REQUEST
  // const deleteWorkout = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:8000/api/workout/${id}`);

  //     getWorkouts();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // //UPDATE REQUEST

  // const [updateForm, setUpdateForm] = useState({
  //   _id: null,
  //   title: "",
  //   reps: "",
  //   loads: "",
  // });

  // const handleUpdateForm = (e) => {
  //   setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  // };
  // // const toggleUpdate = async (id) => {
  // //   const response = await axios.get(`http://localhost:8000/api/workout/${id}`);
  // //   setUpdateForm(response.data);
  // // };
  // const updateWorkoutData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.patch(`http://localhost:8000/api/workout/${updateForm._id}`, updateForm);
  //     getWorkouts();
  //     setUpdateForm({ _id: null, title: "", reps: "", loads: "" });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="App">
      {/* {!updateForm._id && (
        <form onSubmit={createWorkoutData}>
          <h1>Workout Prep</h1>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleFormFiel}
          />
          <label>Reps</label>
          <input
            type="number"
            name="reps"
            value={form.reps}
            onChange={handleFormFiel}
          />
          <label>Loads</label>
          <input
            type="number"
            name="loads"
            value={form.loads}
            onChange={handleFormFiel}
          />
          <button>Submit</button>
        </form>
      )}
      {updateForm._id && (
        <form onSubmit={updateWorkoutData}>
          <h1> Update Workout Prep</h1>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={updateForm.title}
            onChange={handleUpdateForm}
          />
          <label>Reps</label>
          <input
            type="number"
            name="reps"
            value={updateForm.reps}
            onChange={handleUpdateForm}
          />
          <label>Loads</label>
          <input
            type="number"
            name="loads"
            value={updateForm.loads}
            onChange={handleUpdateForm}
          />
          <button>Update Prep</button>
        </form>
      )}
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
        })} */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workouts" element={<Workouts />}/> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
