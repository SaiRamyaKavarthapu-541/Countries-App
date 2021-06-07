
import React, { Component } from 'react';
import Data from '../mock/MockData'
import '../styles/App.css'

import CountriesDropDown from './CountriesDropDown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.heading}</h1>
        <CountriesDropDown />
      </div>
    );
  }
}
App.defaultProps = Data
export default App;