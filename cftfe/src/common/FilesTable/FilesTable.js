import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Icon from 'react-fontawesome';
import _ from 'lodash';
import './FilesTable.css';
import { connect } from 'react-redux';
import { getDatabaseFiles } from  './../../actions/fileActions';
import { upCountSelectedFile, downCountSelectedFile, addFileToSelectionList, removeFileFromSelectionList } from './../../actions/fileActions';

class FilesTable extends React.Component {
    constructor() {
        super();

        this.state = {
            rows:[]
        };

        this.handleRowState = this.handleRowState.bind(this);
    }

    handleRowState(state, fileId) {

     if(state===true) {
         this.props.upcountSelectedFile();
         this.props.addFileToSelectionList(fileId);
      } else {
         this.props.downCountSelectedFile();
         this.props.removeFileFromSelectionList(fileId);
      }
    }

    componentWillMount() {
        this.props.getDatabaseFiles();
    }

    render() {
        const rows = this.props.files;
        console.log("Asa arata datele mele:");
        console.log(rows);
        return (
            <div className="files_table">
               <TableHeader />
               <div className="table_body">
               {rows.map((item, index)=>{
                   return <TableRow id={item.id}
                                    rowState={this.handleRowState}
                                    selected={item.selected}
                                    key={index} 
                                    options={item}/>;
               })}
               </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        files:state.files
    }
}

function mapDispatchToProps(dispatch) {
    return {
        upcountSelectedFile: () => {dispatch(upCountSelectedFile())},
        downCountSelectedFile:() =>{dispatch(downCountSelectedFile())},
        getDatabaseFiles:()=>{dispatch(getDatabaseFiles())},
        addFileToSelectionList:(fileId)=>{dispatch(addFileToSelectionList(fileId))},
        removeFileFromSelectionList:(fileId)=>{dispatch(removeFileFromSelectionList(fileId))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilesTable);