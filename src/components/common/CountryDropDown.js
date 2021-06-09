import React, { Component } from 'react';
import Data from '../../mock/MockData';
class CountryDropDown extends Component {

    render() {
        const dropDownList = this.props.dropDownList
        return (
            <select onChange={this.props.onChange}>
                {
                    dropDownList.map(x => {
                        return <option>
                            {x.name}</option>
                    })
                }
            </select>
        )
    }
}
CountryDropDown.defaultProps = { Content: Data }
export default CountryDropDown;
