import React from 'react'

class TodoForm extends React.Component {

  state = {
    value: ""
  }

  getItem = (e) => {
    // this.setState({item: {value: e.target.value, done: false}})
    this.setState({value:e.target.value});
  }

  onClick = () => {
    // this.setState({item: {value: this.state.value, done: false}})
    this.props.addItem(this.state.value);
    this.setState({value:""})
  }
  render(){
    console.log(this.props.inputText)
    return(
      <div className="form">
        <input
          className="item-input"
          onChange={(e)=> this.getItem(e)}
          type="text"
          value={this.state.value}
        />
        <button
          className="btn btn__add"
          onClick={this.onClick}
        ></button>
      </div>
    )
  }
}

export default TodoForm
