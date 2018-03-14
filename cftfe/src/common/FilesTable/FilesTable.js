import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Icon from 'react-fontawesome';
import _ from 'lodash';
import './FilesTable.css';

class FilesTable extends React.Component {
    constructor() {
        super();

        this.state = {
            rows:[]
        };
    }

    componentWillMount() {
        let rows = _.range(0,30);
       this.setState({rows});
    }

    render() {
        
        const rows = this.state.rows;

        return (
            <div className="files_table">
               <TableHeader />
               <div className="table_body">
               {rows.map(()=>{
                   return <TableRow />;
               })}
               </div>
            </div>
        );
    }
}
export default FilesTable;