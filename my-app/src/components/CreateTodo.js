import React from "react";

const CreateBook = ({ handleTodoSubmit, handleTodoOnChangeForm }) => {
  return (
    <div className="form-wrapper">
      <div className="form">
        <form>
          <div className="input-group">
            <label>todo</label>
            <input
              type="text"
              onChange={(e) => handleTodoOnChangeForm(e)}
              name="todo"
              placeholder="todo"
            />
          </div>
          <div className="input-group">
            <label>category</label>
            <input
              type="text"
              onChange={(e) => handleTodoOnChangeForm(e)}
              name="category"
              placeholder="category"
            />
          </div>
          <div className="input-group">
            <label>complete</label>
            <input
              type="text"
              onChange={(e) => handleTodoOnChangeForm(e)}
              name="complete"
              placeholder="complete?"
            />
          </div>
          <button className="submit-button" onClick={() => handleTodoSubmit()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
