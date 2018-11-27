import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
  }

  async componentDidMount () {
    const res = await axios.get('/api/todos')
    this.setState({todos: res.data})
  }

  addTodo(todo) {
    this.setState({
      //[event.target.name]: event.target.value
      todos: [...this.state.todos,todo]
    })
  }

  async removedTodo(todoId){
    console.log('todoId', todoId)
    const res = await axios.delete('/api/todos', todoId)
    res.send()
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId )
    })
  }

  render () {
    return (
      <div id='todos'>
        <CreateTodo addTodo={this.addTodo} />
        {
          this.state.todos.map(todo => <Todo todo={todo} key={todo.id} removedTodo = {this.removedTodo}/>)
        }
      </div>
    )
  }
}
