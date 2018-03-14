import React from 'react';
import Icon from 'react-fontawesome';

class TableRow extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="table_row">
                <div className="table_cell"><Icon name="folder"/>Folder A</div>
                <div className="table_cell">Feb 22, 2015</div>
                <div className="table_cell">Private</div>
                <div className="table_cell">62.1 MB</div>
            </div>
        );
    }
}
export default TableRow;