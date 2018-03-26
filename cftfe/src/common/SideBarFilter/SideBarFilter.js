import React from 'react';
import $ from 'jquery';
import './SideBarFilter.css';
import { connect } from 'react-redux';
import { getDatabaseFiles,
        getRecycleBinFiles, 
        getLastDayAccessedFiles, 
        deselectAllFiles, 
        getHeaderWithDeleteAbility, 
        getHeaderWithRestoreAbility, 
        setStateForSortView,
        loadDatabaseFiles } from './../../actions/fileActions';

import mockFileApi from '../../api/mockFileApi';

class SideBarFilter extends React.Component {
    constructor() {
        super();

        this.state = {};

        this.handleSelection = this.handleSelection.bind(this);
        this.addSelectedClassToElement = this.addSelectedClassToElement.bind(this);
    }

    handleSelection(e) {
        this.addSelectedClassToElement(e);
    }

    addSelectedClassToElement(e) {
        $('.filter_item').removeClass('selected');
        $("#" + e.target.id).addClass('selected');
        this.props.deselectAllFiles();
        switch(e.target.id) {
            case 'allItem': 
                this.props.loadDatabaseFiles();
                this.props.getHeaderWithDeleteAbility();
                this.props.setStateForSortView(1);
                return;
            case 'lastDay':
               this.props.getLastDayAccessedFiles();
               this.props.getHeaderWithDeleteAbility();
               this.props.setStateForSortView(2);
                return;
            case 'recicleBin':
                this.props.getRecycleBinFiles();
                this.props.getHeaderWithRestoreAbility();
                this.props.setStateForSortView(3);
                return;
            default:
                return;    
        }
    }

    render() {
        return (
        <div className="sidebar_filter">
            <p className="title">OneDrive</p>
            <div className="filter_container">
                <div id="allItem" onClick={this.handleSelection} className="filter_item selected">All</div>
                <div id="lastDay" onClick={this.handleSelection} className="filter_item">Accessed Last Day</div>
                <div id="recicleBin" onClick={this.handleSelection} className="filter_item">Recycle Bin</div>
            </div>
        </div>);
    }
}
function mapStateToProps(state, ownProps) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        getDatabaseFiles:()=>{dispatch(getDatabaseFiles())},
        getRecycleBinFiles:()=>{dispatch(getRecycleBinFiles())},
        getLastDayAccessedFiles:()=>{dispatch(getLastDayAccessedFiles())},
        deselectAllFiles:()=>{dispatch(deselectAllFiles())},
        getHeaderWithDeleteAbility:()=>{dispatch(getHeaderWithDeleteAbility())},
        getHeaderWithRestoreAbility:()=>{dispatch(getHeaderWithRestoreAbility())},
        setStateForSortView:(view)=>{dispatch(setStateForSortView(view))},
        loadDatabaseFiles:()=>{dispatch(loadDatabaseFiles())}

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBarFilter);