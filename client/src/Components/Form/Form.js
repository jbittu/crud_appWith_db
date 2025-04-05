import React from "react";
import { useContext } from "react";
import { Data } from "../../Contex/WorkOutContex";
import "./Form.css";

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
      <div className="form">
        {!updateForm._id && (
          <form className="form" onSubmit={createWorkoutData}>
            <h1> Create Workout Prep</h1>
            <div className="field">
              <label>Exercise</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleFormFiel}
              />
            </div>
            <div className="field">
              <label>Reps</label>
              <input
                type="tel"
                name="reps"
                value={form.reps}
                onChange={handleFormFiel}
              />
            </div>
            <div className="field">
              <label>Loads (in KG)</label>
              <input
                type="tel"
                name="loads"
                value={form.loads}
                onChange={handleFormFiel}
              />
            </div>

            <button>Submit</button>
          </form>
        )}
      </div>

      <div className="form">
        {updateForm._id && (
          <form className="form" onSubmit={updateWorkoutData}>
            <h1> Update Workout Prep</h1>
            <div className="field">
              <label>Excercise</label>
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
                type="tel"
                name="reps"
                value={updateForm.reps}
                onChange={handleUpdateForm}
              />
            </div>
            <div className="field">
              <label>Loads (in KG)</label>
              <input
                type="tel"
                name="loads"
                value={updateForm.loads}
                onChange={handleUpdateForm}
              />
            </div>

            <button>Update Prep</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
