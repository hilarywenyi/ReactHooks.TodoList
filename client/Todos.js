import React, { Component } from "react";
import axios from "axios";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removedTodo = this.removedTodo.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("/api/todos");
    this.setState({ todos: res.data });
  }

  addTodo(todo) {
    this.setState({
      //[event.target.name]: event.target.value
      todos: [...this.state.todos, todo]
    });
  }

  async removedTodo(todoId) {
    await axios.delete(`/api/todos/${todoId}`);
    let newArray = this.state.todos.filter(todo => todo.id !== todoId)
    console.log("newarray", newArray)
    this.setState({
      todos: newArray
    });
  }

  render() {
    return (
      <div id="todos">
        <CreateTodo addTodo={this.addTodo} />
        {this.state.todos.map(todo => (
          <Todo todo={todo} key={todo.id} removedTodo={this.removedTodo} />
        ))}
      </div>
    );
  }
}
