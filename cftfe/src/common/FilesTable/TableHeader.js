import React from 'react';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import { sortByNameAscendent,
         sortByDateAscendent,
         sortBySizeAscendent } from './../../actions/fileActions';


class TableHeader extends React.Component {
    constructor() {
        super();

        this.state = {
            nameAscending:0,
            dateAscending:0,
            sizeAscending:0
        };
        this.sortByName = this.sortByName.bind(this);
        this.sortByDate = this.sortByDate.bind(this);
        this.sortBySize = this.sortBySize.bind(this);
    }

    sortByName() {
        this.props.sortByNameAscendent()
    }

    sortByDate() {
        this.props.sortByDateAscendent();
    }

    sortBySize() {
        this.props.sortBySizeAscendent();

    }

    render() {
        return(
            <div className="table_header">
            <div>
                <Icon name="file"/>
                <span onClick={this.sortByName}>Name</span>
                <Icon name="arrow-up"/> 
                <Icon name="chevron-down"/>
            </div> 
            <div>
                <span onClick={this.sortByDate}>Last Accesed</span>
                <Icon name="chevron-down"/>
            </div>
            <div>
                <span>Sharing</span>
            </div>
            <div>
                <span onClick={this.sortBySize}>Size</span>
                <Icon name="chevron-down"/>
            </div>
       </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        sortByNameAscendent:()=>{dispatch(sortByNameAscendent())},
        sortByDateAscendent:()=>{dispatch(sortByDateAscendent())},
        sortBySizeAscendent:()=>{dispatch(sortBySizeAscendent())}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);