import React, {Component} from 'react'
import Axios from 'axios';
import { runInNewContext } from 'vm';

export default class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
      taskName: "",
      assignee: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    try{
    const res = await Axios.post('/api/todos', {taskName: event.target.taskName.value, assignee: event.target.assignee.value})
    console.log('whata res.data in handleSubmit', res.data)
    this.props.addTodo(res.data)
    }catch(error){
      console.error(error)
    }
    
  }

  render () {
    console.log(this.props.addTodo)
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Task Name */}
        <label htmlFor="taskName">Task Name:</label>
        <input type="text" name="taskName" value={this.state.taskName} onChange={this.handleChange} />
        {/* Assignee */}
        <label htmlFor="assignee">Assign To:</label>
        <input type="text" name="assignee" value={this.state.assignee} onChange={this.handleChange} />
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    )
  }
}
