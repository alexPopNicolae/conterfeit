import React from 'react';
import './SearchComponent.css';
import Icon from 'react-fontawesome';

class SearchComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="search_component">
                <div className="container">
                    <Icon  size='2x' name="search"/>
                    <input className="search_input" type="text" placeholder="Search everything..."/>
                </div>
            </div>
        );
    }
}
export default SearchComponent;