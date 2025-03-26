import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
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

  return (
    <div className="App">
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
