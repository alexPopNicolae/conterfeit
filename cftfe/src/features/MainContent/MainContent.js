import React from 'react';
import './MainContent.css';
import ActionHeader from '../../common/ActionHeader';
import FilesTable from '../../common/FilesTable';
import AddFileModal from '../../common/AddFileModal';

class MainContent extends React.Component {
    constructor() {
        super();

        this.state={
            itemSelected:true,
            modalVisible:false
        };

        this.handleClick = this.handleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleClick() {
      this.setState({
          itemSelected:!this.state.itemSelected
      });
    }

    toggleModal() {
        this.setState({
            modalVisible:!this.state.modalVisible
        });
    }

    render() {
        return(
            <div className="main_content">
               <ActionHeader openModal={this.toggleModal} itemSelected={this.state.itemSelected}/>
               <div className="container">
                <h1>Files</h1>
                <FilesTable />
                <AddFileModal closeModal={this.toggleModal} visible={this.state.modalVisible}/>
               </div>
            </div>
        );
    }
}

export default MainContent;