import React from 'react';
import './ActionHeader.css';
import Icon from 'react-fontawesome';
import ShareComponent from './../ShareComponent';
import { connect } from 'react-redux';
import toastr from 'toastr';
import { bindActionCreators } from 'redux';
import { deselectAllFiles,
        getDatabaseFiles,
        removeAllSelectedFilesFromSelectionList,
        getStateActiveFile,
        restoreSelectedFiles,
        changeSharingOption,
        getLastDayAccessedFiles,
        getRecycleBinFiles,
        loadDeletedAndSelectedFiles,
        loadDeletedFilesAfterRestore
         } from './../../actions/fileActions';


class ActionHeader extends React.Component {
    constructor() {
        super();

        this.state = {
            isItemSelected: false
        };

        this.deselectAllFiles = this.deselectAllFiles.bind(this);
        this.deleteSelectedFiles = this.deleteSelectedFiles.bind(this);
        this.restoreSelectedFiles = this.restoreSelectedFiles.bind(this);
        this.handleSelectedShareOption = this.handleSelectedShareOption.bind(this);
    }


    componentWillMount() {
        this.setState({
            isItemSelected: this.props.itemSelected
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isItemSelected: nextProps.itemSelected
        });
    }

    deselectAllFiles() {
        this.props.deselectAllFile();
        this.props.getStateActiveFile();
        this.props.removeAllSelectedFilesFromSelectionList();
    }

    deleteSelectedFiles() {
        if(this.props.selectedFiles.length === 1) {
            toastr.success("Deleted selected file");
        } else {
            toastr.success("Deleted selected files");
        }
        this.props.loadDeletedAndSelectedFiles(this.props.selectedFiles);
        this.props.removeAllSelectedFilesFromSelectionList();
        this.props.getStateActiveFile();
        this.deselectAllFiles();
    }

    restoreSelectedFiles() {
        toastr.success('Restored selected files!');
        this.props.loadDeletedFilesAfterRestore(this.props.selectedFiles);
        this.props.removeAllSelectedFilesFromSelectionList();
        this.props.getStateActiveFile();
        this.deselectAllFiles();
    }

    handleSelectedShareOption(option) {
        this.props.changeSharingOption(option, this.props.selectedFiles);
        this.props.deselectAllFile();
        this.props.removeAllSelectedFilesFromSelectionList();
        let view = this.props.sidebarView.view;
        switch(view) {
            case 1:
                this.props.getDatabaseFiles();
                return;
            case 2:
                this.props.getLastDayAccessedFiles();
                return;
            case 3: 
               this.props.getRecycleBinFiles();
               return;
            default:
                return;   
        }

    }


    render() {
        let isSelected = this.state.isItemSelected;
        let deleteVisible = this.props.headerVisibility.deleteVisible;
        let restoreVisible = this.props.headerVisibility.restoreVisible;

        return (
            <div className="action_header">
                {this.props.fileCount === 0 ?
                    <div className="content normal_item">
                        <div className="left_content">
                            <span className="action_item" onClick={this.props.openModal}>
                                <Icon name="plus" size="2x" />
                                <span className="text">New</span>
                            </span>
                        </div>
                        <div className="right_content">
                            <span className="action_item">
                                <Icon name="sort" size="2x" />
                                <span className="text">Sort</span>
                                <Icon name="chevron-down" />
                            </span>
                            <span className="action_item">
                                <Icon name="align-left" size="2x" />
                            </span>
                            <span className="action_item">
                                <Icon name="info-circle" size="2x" />
                            </span>
                        </div>
                    </div>
                    : null}
                {this.props.fileCount != 0 && deleteVisible ?
                    <div className="content normal_item">
                        <div className="left_content">
                            <ShareComponent handleSelectedOption={this.handleSelectedShareOption}/>
                            <span title="Delete Selected files" className="action_item" onClick={this.deleteSelectedFiles}>
                                <Icon name="trash" size="2x" />
                                <span className="text">Delete</span>
                            </span>
                        </div>
                        <div className="right_content">
                            <div className="action_item count">
                                <div className="counting_text">{this.props.fileCount} selected</div>
                            </div>
                            <div className="action_item" onClick={this.deselectAllFiles}>
                                <Icon name="times" size="2x" />
                            </div>
                        </div>
                    </div> : null}

                {this.props.fileCount != 0 && restoreVisible ? 
                <div className="content normal_item">
                <div className="left_content">
                    <ShareComponent handleSelectedOption={this.handleSelectedShareOption}/>
                    <span title="Restore selected files" className="action_item" onClick={this.restoreSelectedFiles}>
                        <Icon name="undo" size="2x" />
                        <span className="text">Restore</span>
                    </span>
                </div>
                <div className="right_content">
                    <div className="action_item count">
                        <div className="counting_text">{this.props.fileCount} selected</div>
                    </div>
                    <div className="action_item" onClick={this.deselectAllFiles}>
                        <Icon name="times" size="2x" />
                    </div>
                </div>
            </div> : null} 
               

            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        sidebarView:state.sidebarView,
        headerVisible: state.headerVisible,
        fileCount: state.fileCount,
        selectedFiles: state.selectedFiles,
        headerVisibility: state.headerVisibility
    };
}
function mapDispatchToProps(dispatch) {
    return {
        deselectAllFile: () => dispatch(deselectAllFiles()),
        getStateActiveFile: () => dispatch(getStateActiveFile()),
        removeAllSelectedFilesFromSelectionList: () => dispatch(removeAllSelectedFilesFromSelectionList()),
        loadDeletedAndSelectedFiles: (files) => dispatch(loadDeletedAndSelectedFiles(files)),
        restoreSelectedFiles:(files) => dispatch(restoreSelectedFiles(files)),
        changeSharingOption:(option, files) => dispatch(changeSharingOption(option, files)),
        getDatabaseFiles:()=>{dispatch(getDatabaseFiles())},
        getLastDayAccessedFiles:()=>{dispatch(getLastDayAccessedFiles())},
        getRecycleBinFiles:()=>{dispatch(getRecycleBinFiles())},
        loadDeletedFilesAfterRestore:(selectedFiles)=>{dispatch(loadDeletedFilesAfterRestore(selectedFiles))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActionHeader);