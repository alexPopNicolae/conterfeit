import React from 'react';
import './ActionHeader.css';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ActionHeader extends React.Component {
    constructor() {
        super();

        this.state={
            isItemSelected:false
        };
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


    render() {
        let isSelected = this.state.isItemSelected;
        return (

          <div className="action_header">
           { !isSelected ? 
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
                    <span className="text">2 selected</span>
                </span>
                <span className="action_item" onClick={this.props.clearSelectedFiles}>
                    <Icon name="times" size="2x"/>
                </span>
                </div>
            </div>
           }
           
          </div>
        );
    }
}

export default ActionHeader;