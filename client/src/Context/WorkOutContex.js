import React, {
  useState,
  useEffect,
  createContext,
  useCallback
} from "react";
import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";

export const Data = createContext();

const WorkOutContext = ({ children }) => {
  const [workouts, setWorkouts] = useState(null);
  const { user } = useAuthContext();

  // Fetch workouts
  const getWorkouts = useCallback(async () => {
    if (!user?.token) return;

    try {
      const response = await axios.get("http://localhost:8000/api/workout", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setWorkouts(response.data);
    } catch (error) {
      console.error("Failed to fetch workouts:", error.response?.data || error.message);
    }
  }, [user]);

  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  // Form states
  const [form, setForm] = useState({
    title: "",
    reps: "",
    loads: "",
  });

  const handleFormField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createWorkoutData = async (e) => {
    e.preventDefault();
    if (!user?.token) return;

    try {
      await axios.post("http://localhost:8000/api/workout", form, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      getWorkouts();
      setForm({ title: "", reps: "", loads: "" });
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // Delete
  const deleteWorkout = async (id) => {
    if (!user?.token) return;

    try {
      await axios.delete(`http://localhost:8000/api/workout/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      getWorkouts();
    } catch (err) {
      console.error(err);
    }
  };

  // Update
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
    try {
      const response = await axios.get(`http://localhost:8000/api/workout/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setUpdateForm(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateWorkoutData = async (e) => {
    e.preventDefault();
    if (!updateForm._id || !user?.token) return;

    try {
      await axios.patch(
        `http://localhost:8000/api/workout/${updateForm._id}`,
        updateForm,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      getWorkouts();
      setUpdateForm({ _id: null, title: "", reps: "", loads: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Data.Provider
      value={{
        workouts,
        setWorkouts,
        form,
        setForm,
        updateForm,
        setUpdateForm,
        getWorkouts,
        deleteWorkout,
        toggleUpdate,
        handleFormField,
        updateWorkoutData,
        handleUpdateForm,
        createWorkoutData,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default WorkOutContext;
