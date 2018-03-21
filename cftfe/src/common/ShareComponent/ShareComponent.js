import React from 'react';
import Icon from 'react-fontawesome';
import './ShareComponent.css';

class ShareComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            optionsVisible:false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleOption = this.handleOption.bind(this);
    }

    handleClick() {
        this.setState({
            optionsVisible:!this.state.optionsVisible
        });
    }

    handleOption(e) {
        this.props.handleSelectedOption(e.target.id);
    }

    render() {
        return (
        <span onClick={this.handleClick} className="action_item share_component">
            <Icon name="share-square" size="2x" />
            <span className="text">Share</span>
            {this.state.optionsVisible ? 
            <div className="share_options_container">
                <div id="shared" onClick={this.handleOption} className="option">Shared</div>
                <div id="private" onClick={this.handleOption} className="option">Private</div>
                <div id="public" onClick={this.handleOption} className="option">Public</div>
            </div>:null}
        </span>
        );
    }
}
export default ShareComponent;