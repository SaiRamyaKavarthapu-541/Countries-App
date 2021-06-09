
import React, { Component } from 'react';
import Data from '../mock/MockData'
import '../styles/App.css'
import RegionCountryDropDown from './RegionCountryDropDown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.heading}</h1>
        <RegionCountryDropDown Content={this.props.Content} />
      </div>
    );
  }
}
App.defaultProps = { Content: Data }
export default App;