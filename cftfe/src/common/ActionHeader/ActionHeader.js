import React from 'react';
import './ActionHeader.css';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deselectAllFiles, getDatabaseFiles } from  './../../actions/fileActions';

class ActionHeader extends React.Component {
    constructor() {
        super();

        this.state={
            isItemSelected:false
        };

        this.deselectAllFiles = this.deselectAllFiles.bind(this);
    }


    componentWillMount() {
        this.setState({
            isItemSelected:this.props.itemSelected
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isItemSelected:nextProps.itemSelected
        });
    }

    deselectAllFiles() {
        this.props.deselectAllFile();
        this.props.getDatabaseFiles();
    }


    render() {
        let isSelected = this.state.isItemSelected;
        return (

          <div className="action_header">
           { this.props.fileCount === 0 ? 
            <div className="content normal_item">
                <div className="left_content">
                <span className="action_item" onClick={this.props.openModal}>
                    <Icon name="plus" size="2x"/>
                    <span className="text">New</span>
                </span>
                </div>
                <div className="right_content">
                <span className="action_item">
                    <Icon name="sort" size="2x"/>
                    <span className="text">Sort</span>
                    <Icon name="chevron-down" />
                </span>
                <span className="action_item">
                    <Icon name="align-left" size="2x"/>
                </span>
                <span className="action_item">
                    <Icon name="info-circle" size="2x"/>
                </span>
                </div>
            </div>
            :
            <div className="content normal_item">
                <div className="left_content">
                <span className="action_item">
                    <Icon name="share-square" size="2x"/>
                    <span className="text">Share</span>
                </span>
                <span className="action_item">
                    <Icon name="trash" size="2x"/>
                    <span className="text">Delete</span>
                </span>
                </div>
                <div className="right_content">
                <span className="action_item">
                    <span className="text">{this.props.fileCount} selected</span>
                </span>
                <span className="action_item" onClick={this.deselectAllFiles}>
                    <Icon name="times" size="2x"/>
                </span>
                </div>
            </div>
           }
           
          </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        headerVisible:state.headerVisible,
        fileCount:state.fileCount
    };
}
function mapDispatchToProps(dispatch) {
    return {
        deselectAllFile:()=>dispatch(deselectAllFiles()),
        getDatabaseFiles:()=>dispatch(getDatabaseFiles())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActionHeader);