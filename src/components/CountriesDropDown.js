import React, { Component } from 'react'
import { getCountries } from "../actions/action_getCountries"
import { connect } from 'react-redux';
import Data from '../mock/MockData'
export class CountriesDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown1: [],
            dropdown2: [],
            selected: '',      
        };
    }
    componentDidMount() {
           this.setCountries(this.props.countries[0]);
           this.setState({
            dropdown1: this.props.countries,
            dropdown2: this.props.result
       });    
    }
    componentWillReceiveProps(nextProps){
        if(this.state.result !== nextProps.result) {
            this.setState({
               dropdown2: nextProps.result ,
               selected: nextProps.name
            })
        }
    } 
     setCountries(name) {
        this.props.getCountries(name);
        if(this.props.result) {
            this.setState({
                dropdown2: this.props.result,
            })
        }
     }
    handleDropDown1Change(e) {
        e.preventDefault();
        this.setCountries(e.target.value);   
    }
  
    render() {
     return (
            <div>
                <select value={this.state.selected} onChange={this.handleDropDown1Change.bind(this)}>
                    {
                        this.state.dropdown1.map(x => {
                            return <option key={x}>{x}</option>
                        })
                    }
                </select>
                <select >
                    {
                        this.state.dropdown2.map(x => {
                            return <option>{x.name}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}
CountriesDropDown.defaultProps = Data
const mapStateToProps = (state) => {
   
    return {
        result:state.event.result,
        error:state.event.error,
};

};
const mapDispatchProps =(dispatch) => ({
    getCountries: (name) => dispatch(getCountries(name))
});
export default connect(mapStateToProps, mapDispatchProps)(CountriesDropDown);