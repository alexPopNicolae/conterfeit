import React from 'react';
import './LeftSideBar.css';
import SearchComponent from '../../common/SearchComponent';
import SideBarFilter from '../../common/SideBarFilter';


class LeftSideBar extends React.Component {
    constructor() {
        super();

        this.handleKeyWord = this.handleKeyWord.bind(this);
    }

    handleKeyWord(keyword) {
        console.log(keyword);
    }

    render() {
        return(
            <div className="left_side_bar">
              <SearchComponent handleChange={this.handleKeyWord}/>
              <SideBarFilter />
            </div>
        );
    }
}
export default LeftSideBar;