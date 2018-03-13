import React from 'react';
import Icon from 'react-fontawesome';
import './FilesTable.css';

class FilesTable extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="files_table">
               <div className="table_header">
                    <div>
                        <Icon name="file"/>
                        <span>Name</span>
                        <Icon name="arrow-up"/> 
                        <Icon name="chevron-down"/>
                    </div> 
                    <div>
                        <span>Last Accesed</span>
                        <Icon name="chevron-down"/>
                    </div>
                    <div>
                        <span>Sharing</span>
                    </div>
                    <div>
                        <span>Size</span>
                        <Icon name="chevron-down"/>
                    </div>
               </div>
               <div className="table_body">
                <p>Aici vin elementele din tabel</p>
               </div>
            </div>
        );
    }
}
export default FilesTable;