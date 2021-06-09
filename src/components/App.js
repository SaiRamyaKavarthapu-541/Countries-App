
import React, { Component } from 'react';
import Data from '../mock/countryRegionMock'
import '../styles/App.css'
import RegionCountryList from './regionCountryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.heading}</h1>
        <RegionCountryList Content={this.props.Content} />
      </div>
    );
  }
}
App.defaultProps = { Content: Data }
export default App;