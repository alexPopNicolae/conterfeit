import React from 'react';
import './LeftSideBar.css';
import SearchComponent from '../../common/SearchComponent';
import SideBarFilter from '../../common/SideBarFilter';
import { connect } from 'react-redux';
import { sortFilesBasedOnKeyWord } from  './../../actions/fileActions';


class LeftSideBar extends React.Component {
    constructor() {
        super();

        this.handleKeyWord = this.handleKeyWord.bind(this);
    }

    handleKeyWord(keyword) {
        this.props.sortFilesBasedOnKeyWord(keyword);
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

function mapStateToProps(state, ownProps) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        sortFilesBasedOnKeyWord:(keyword)=>{dispatch(sortFilesBasedOnKeyWord(keyword))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);