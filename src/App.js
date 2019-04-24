import React, { Component } from 'react';
import ImgBtnWrapper from './components/ImgBtnWrapper/ImgBtnWrapper'
import Navbar from './components/Navbar/Navbar'
// import './index.css';



class App extends Component {
  state = {
    score: 0,
    ids: [],
    highscore: 0,
  }
  handleClick = (id) => {
    console.log("I got a click from: " + id);
    if (!this.state.ids.includes(id)) {
      this.setState((prevState, props) => {
        return {
          ...prevState,
          score: prevState.score + 1,
          ids: [...prevState.ids, id],
          highscore: (prevState.highscore < prevState.score +1) ? 
            prevState.score + 1 : prevState.highscore
        }
      })
    } else if (this.state.ids.includes(id)) {
      this.setState({
        ...this.state,
        score: 0,
        ids: []
      })
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Navbar score={this.state.score} highscore={this.state.highscore}/>
        <div className="col-md-8 offset-2 mt-4 mb-4">
          <ImgBtnWrapper clickHandler={this.handleClick} />
        </div>
      </>
    )
  }
}

export default App;
