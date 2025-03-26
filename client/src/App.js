import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {
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
  loads: ""
});
const handleFormFiel = (e) => {
  
  setForm({ ...form, [e.target.name]: e.target.value });
}
const createWorkoutData = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:8000/api/workout", form);
  // console.log(response.data);
  getWorkouts();
  setForm({ title: "", reps: "", loads: "" });
}
  return (
    <div className="App">
      <form onSubmit={createWorkoutData}>
        <h1>Workout Prep</h1>
        <label>Title</label>
        <input type="text" name="title" value={form.title} onChange={handleFormFiel}/>
        <label>Reps</label>
        <input type="number" name="reps" value={form.reps} onChange={handleFormFiel}/>
        <label>Loads</label>
        <input type="number" name="loads" value={form.loads} onChange={handleFormFiel}/>
        <button >Submit</button>
      </form>
      {workouts &&
        workouts.map((item) => {
          return (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <p>{item.reps}</p>
              <p>{item.loads}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
