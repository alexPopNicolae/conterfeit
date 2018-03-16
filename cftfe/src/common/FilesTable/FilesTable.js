import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Icon from 'react-fontawesome';
import _ from 'lodash';
import './FilesTable.css';
import { connect } from 'react-redux';

class FilesTable extends React.Component {
    constructor() {
        super();

        this.state = {
            rows:[]
        };

        this.handleRowState = this.handleRowState.bind(this);
    }

    handleRowState(state) {
        let id = state.id;
        let selected = state.selected;
        let rows = this.state.rows;
        rows[id].selected = selected;
        var result = rows.filter(function(item){
            if(item.selected==true) return true;
        });
        if(result.length !==0) {
            this.props.itemStatus(true);
        } else {
            this.props.itemStatus(false);
        }
        this.setState({rows});
    }

    componentWillMount() {
      let elements = _.range(0,30);
      let rows = elements.map((item, index)=>{
            let element = {};
            element.id = index;
            element.selected = false;
            return element;
      });  
       this.setState({rows});
    }

    render() {
        
        const rows = this.props.files;

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

function mapDispatchToProps() {}

export default connect(mapStateToProps)(FilesTable);