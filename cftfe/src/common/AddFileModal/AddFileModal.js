import React from 'react';
import Icon from 'react-fontawesome';
import './AddFileModal.css';
import { connect } from 'react-redux';
import  { createFile, loadDatabaseFiles, addNewFileToDatabase }  from './../../actions/fileActions';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

class AddFileModal extends React.Component {
    constructor() {
        super();

        this.state={
            visible:false,
            fileName:''
        };

        this.closeModal = this.closeModal.bind(this);
        this.handleFileName = this.handleFileName.bind(this);
        this.saveEnteredFile = this.saveEnteredFile.bind(this);
    }

    handleFileName(e) {
        this.setState({
            fileName:e.target.value
        });
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

    saveEnteredFile() {
        this.setState({
            fileName:''
        });
        this.props.closeModal();
        if(this.state.fileName.length > 0) {
            this.props.addNewFileToDatabase(this.state.fileName);
            this.props.loadDatabaseFiles();
            toastr.success(this.state.fileName + " folder added to OneDrive");
        }else {
            toastr.error("The filename must be at least 1 character long!");
        }
        
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
               <label htmlFor="fileName">Add a new file:</label>
               <input id="fileName" type="text" value={this.state.fileName} placeholder="Filename here..." onChange={this.handleFileName}/>
               </div>
               <div className="modal_footer">
                    <button onClick={this.saveEnteredFile}>Save</button>
                    <button onClick={this.closeModal}>Cancel</button>
               </div>
              </div>
            </div>
        );
    }
}

function mapsStateToProps(state, ownProps) {
    return {
        files:state.files
    };
}
function mapDispatchToProps(dispatch) {
    return {
        createFile:fileName => dispatch(createFile(fileName)),
        loadDatabaseFiles:()=>{dispatch(loadDatabaseFiles())},
        addNewFileToDatabase:(fileName)=>{dispatch(addNewFileToDatabase(fileName))}
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(AddFileModal);