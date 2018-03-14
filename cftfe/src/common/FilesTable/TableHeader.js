import React from 'react';
import Icon from 'react-fontawesome';

class TableHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
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
        );
    }
}
export default TableHeader;