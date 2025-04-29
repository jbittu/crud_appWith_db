import React, { useContext } from "react";
import { Data } from "../../Context/WorkOutContex";
import "./Form.css";

const Form = () => {
  const {
    form,
    createWorkoutData,
    handleFormField,
    updateForm,
    updateWorkoutData,
    handleUpdateForm,
  } = useContext(Data);

  return (
    <div>
      {/* Create Workout Form */}
      {!updateForm._id && (
        <div className="form">
          <form className="form" onSubmit={createWorkoutData}>
            <h1>Create Workout Prep</h1>

            <div className="field">
              <label>Exercise</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleFormField}
              />
            </div>

            <div className="field">
              <label>Reps</label>
              <input
                type="number"
                name="reps"
                value={form.reps}
                onChange={handleFormField}
              />
            </div>

            <div className="field">
              <label>Loads (in KG)</label>
              <input
                type="number"
                name="loads"
                value={form.loads}
                onChange={handleFormField}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {/* Update Workout Form */}
      {updateForm._id && (
        <div className="form">
          <form className="form" onSubmit={updateWorkoutData}>
            <h1>Update Workout Prep</h1>

            <div className="field">
              <label>Exercise</label>
              <input
                type="text"
                name="title"
                value={updateForm.title}
                onChange={handleUpdateForm}
              />
            </div>

            <div className="field">
              <label>Reps</label>
              <input
                type="number"
                name="reps"
                value={updateForm.reps}
                onChange={handleUpdateForm}
              />
            </div>

            <div className="field">
              <label>Loads (in KG)</label>
              <input
                type="number"
                name="loads"
                value={updateForm.loads}
                onChange={handleUpdateForm}
              />
            </div>

            <button type="submit">Update Prep</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
