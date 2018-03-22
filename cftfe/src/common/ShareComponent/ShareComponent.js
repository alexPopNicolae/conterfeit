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
        let option = e.target.id;
        switch(option) {
            case 'public':
                this.props.handleSelectedOption(1);
                return;
            case 'shared':
                this.props.handleSelectedOption(2);
                return;
            case 'private':
                this.props.handleSelectedOption(3);
                return;
            default:
                return;        
        }
    }

    render() {
        return (
        <span onClick={this.handleClick} className="action_item share_component">
            <Icon name="share-square" size="2x" />
            <span className="text">Share</span>
            {this.state.optionsVisible ? 
            <div className="share_options_container">
                <div id="public" onClick={this.handleOption} className="option">Public</div>
                <div id="shared" onClick={this.handleOption} className="option">Shared</div>
                <div id="private" onClick={this.handleOption} className="option">Private</div>
            </div>:null}
        </span>
        );
    }
}
export default ShareComponent;