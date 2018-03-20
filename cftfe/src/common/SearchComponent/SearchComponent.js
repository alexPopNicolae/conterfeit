import React from 'react';
import './SearchComponent.css';
import Icon from 'react-fontawesome';

class SearchComponent extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e.target.value);
    }

    render() {
        return(
            <div className="search_component">
                <div className="container">
                    <Icon  size='2x' name="search"/>
                    <input className="search_input" type="text" onChange={this.handleChange} placeholder="Search everything..."/>
                </div>
            </div>
        );
    }
}
export default SearchComponent;