import React from "react";
import { useContext } from "react";
import { Data } from "../../Contex/WorkOutContex";

const Form = () => {
  const {
    form,
    createWorkoutData,
    handleFormFiel,
    updateForm,
    updateWorkoutData,
    handleUpdateForm,
  } = useContext(Data);

  return (
    <div>
      {!updateForm._id && (
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
    </div>
  );
};

export default Form;
