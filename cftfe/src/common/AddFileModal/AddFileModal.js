import React from 'react';
import Icon from 'react-fontawesome';
import './AddFileModal.css';

class AddFileModal extends React.Component {
    constructor() {
        super();

        this.state={
            visible:false
        };

        this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
        this.setState({
            visible:this.props.visible
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible:nextProps.visible
        });
    }

    closeModal() {
        this.props.closeModal();
    }

    render () {
        let modalState = this.state.visible ? 'add_file_modal visible' : 'add_file_modal';
        return(
            <div className={modalState}>
              <div className="modal_container">
               <div className="modal_header">
                <Icon name="window-close" size="2x" onClick={this.closeModal}/>
               </div>
               <div className="modal_content">
               
               </div>
               <div className="modal_footer">
                    <button onClick={this.closeModal}>Save</button>
                    <button onClick={this.closeModal}>Cancel</button>
               </div>
              </div>
            </div>
        );
    }
}
export default AddFileModal;