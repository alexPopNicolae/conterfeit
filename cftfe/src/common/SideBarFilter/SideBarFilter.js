import React from 'react';
import $ from 'jquery';
import './SideBarFilter.css';
import { connect } from 'react-redux';
import { getDatabaseFiles, getRecycleBinFiles, getLastDayAccessedFiles } from './../../actions/fileActions';
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
        switch(e.target.id) {
            case 'allItem': 
                this.props.getDatabaseFiles();
                return;
            case 'lastDay':
               this.props.getLastDayAccessedFiles();
                return;
            case 'recicleBin':
                this.props.getRecycleBinFiles();
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
        getLastDayAccessedFiles:()=>{dispatch(getLastDayAccessedFiles())}
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBarFilter);