import React from 'react'
import './App.css';
import Nav from './components/Nav.js'
import About from './components/About.js'
import TodoContainer from './components/TodoContainer'

class App extends React.Component {

  state = {
    page: "todoApp",
    
  }

  changePage = (pageName) =>{
    this.setState({page: pageName})
  }

  render() {
    const displayedPage =
      this.state.page === "todoApp" ? (
        <TodoContainer/>
      ) : (
          <About name="Omer" />
      )
    return (
      <div className="App">
        <Nav changePage={this.changePage} />
        {displayedPage}
      </div>
    );
  }
}

export default App;
