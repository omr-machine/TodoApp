import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {

  render(){

    const todosItems = this.props.todosItems.map((item,index)=>{
      return(
        <Todo
          key={index}
          index={index}
          value={item.value}
          done={item.done}
          itemDone={this.props.itemDone}
          deleteItem={this.props.deleteItem}
        />
      )
    });

    return <ul>{todosItems}</ul>;

  }
}

export default TodoList
