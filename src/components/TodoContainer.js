import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class TodoContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      todos: [],
      inputText: "",
    }
  }

  addItem = (item) => {
    if (item.value.trim() !== "") {
      const newTodos = [...this.state.todos]
      newTodos.push({...item})
      this.setState({todos: newTodos, inputText: ""})
      //this.setState({inputText: ""})
    } else {
      console.log("EError")
    }

  }

  clearInput = (input) => {
    this.setState({inputText: input})
  }

  deleteItem = (index) => {
    const newTodos = [...this.state.todos]
    newTodos.splice(index,1)
    this.setState({todos: newTodos})
    this.setState({inputText: ""})
  }

  itemDone = (index) => {
    const newTodos = [...this.state.todos]
    var isDone = this.state.todos[index].done
    //console.log(isDone)
    isDone? isDone = false: isDone = true
    newTodos[index].done = isDone
    this.setState({todos: newTodos})
  }

  render(){



    return(
      <div>
        <h1 className="title">Todo App</h1>
        <TodoForm
          addItem={this.addItem}
          clearInput={this.clearInput}
          inputText={this.state.inputText}
        />
        <hr />
        <TodoList
          todosItems={this.state.todos}
          deleteItem={this.deleteItem}
          itemDone={this.itemDone}
        />
      </div>
    )
  }
}

export default TodoContainer
