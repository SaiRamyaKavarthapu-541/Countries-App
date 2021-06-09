import React, { Component } from 'react'
import { getCountries } from "../actions/action-get-Countries"
import { connect } from 'react-redux';
import CountryDropDown from './common/CountryDropDown';
export class CountriesDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
        };
    }
    componentDidMount() {
        this.setCountries(this.props.Content.countries[0].name);
    }
    setCountries(name) {
        this.props.getCountries(name);
        if (this.props.result) {
            this.setState({
                dropdown2: this.props.result,
            })
        }
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if (prevProps.result !== nextProps.result) {
            return {
                dropdown2: nextProps.result,
                selected: nextProps.name
            }
        }
    }
    handleDropDown1Change(e) {
        e.preventDefault();
        this.setCountries(e.target.value);
    }

    render() {
        return (
            <div>

                <CountryDropDown dropDownList={this.props.Content.countries} onChange={this.handleDropDown1Change.bind(this)} />

                <CountryDropDown dropDownList={this.props.result} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        result: state.event.result,
        error: state.event.error,
    };

};
const mapDispatchProps = (dispatch) => ({
    getCountries: (name) => dispatch(getCountries(name))
});
export default connect(mapStateToProps, mapDispatchProps)(CountriesDropDown);