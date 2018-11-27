import React, {Component} from 'react';
import Axios from "axios";
import TodoForm from "./TodoForm";

export default class UpdateTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskName: this.props.taskName || "",
      assignee: this.props.assignee || ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log('this.props', this.props)
    const todoId = this.props.todo.id
    try {
      const res = await Axios.put(`/api/todos/${todoId}`, this.state);
      this.props.updateTodo(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <TodoForm 
        {...this.state} 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange} 
      />
    );
  }
}
