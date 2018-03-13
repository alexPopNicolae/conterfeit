import React from 'react';
import './MainContent.css';
import ActionHeader from '../../common/ActionHeader';
import FilesTable from '../../common/FilesTable';

class MainContent extends React.Component {
    constructor() {
        super();

        this.state={
            itemSelected:true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
          itemSelected:!this.state.itemSelected
      });
    }

    render() {
        return(
            <div className="main_content">
               <ActionHeader itemSelected={this.state.itemSelected}/>
               <div className="container">
                <h1>Files</h1>
                <FilesTable />
               </div>
            </div>
        );
    }
}

export default MainContent;