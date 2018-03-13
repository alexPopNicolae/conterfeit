import React from 'react';
import './LeftSideBar.css';
import SearchComponent from '../../common/SearchComponent';
import SideBarFilter from '../../common/SideBarFilter';


class LeftSideBar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="left_side_bar">
              <SearchComponent />
              <SideBarFilter />
            </div>
        );
    }
}
export default LeftSideBar;