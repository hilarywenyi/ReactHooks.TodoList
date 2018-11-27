import React, { Component } from "react";

const TodoForm = (props) => {
  console.log(props)
  return (
    <form onSubmit={props.handleSubmit}>
      {/* Task Name */}
      <label htmlFor="taskName">Task Name:</label>
      <input
        type="text"
        name="taskName"
        value={props.state.taskName}
        onChange={props.handleChange}
      />
      {/* Assignee */}
      <label htmlFor="assignee">Assign To:</label>
      <input
        type="text"
        name="assignee"
        value={props.state.assignee}
        onChange={props.handleChange}
      />
      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  )
};

export default TodoForm
