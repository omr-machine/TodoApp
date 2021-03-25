import React from 'react'

class TodoForm extends React.Component {

  state = {
    item: {},
    pass: {},
  }

  getItem = (e) => {
    this.setState({item: {value: e.target.value, done: false}})
    this.props.clearInput(e.target.value)
  }

  render(){
    console.log(this.props.inputText)
    return(
      <div className="form">
        <input
          className="item-input"
          onChange={(e)=> this.getItem(e)}
          type="text"
          value={this.props.inputText}
        />
        <button
          className="btn btn__add"
          onClick={this.state.pass=this.props.inputText?this.state.item:{value:"", done:false}, ()=>this.props.addItem(this.state.pass)}
        ></button>
      </div>
    )
  }
}

export default TodoForm
