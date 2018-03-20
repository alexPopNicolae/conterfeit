import React from 'react';
import Icon from 'react-fontawesome';

class TableRow extends React.Component {
    constructor() {
        super();

        this.state = {
            id:null,
            selected:false
        };

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    componentWillMount() {
        this.setState({
            id:this.props.id,
            selected:this.props.selected
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selected:nextProps.selected
        });
    }

    handleRowClick() {
        
      this.props.rowState(!this.state.selected, this.props.id);
        this.setState({
            selected:!this.state.selected
        })
    }

    render() {

        let rowState = this.state.selected ? 'table_row selected':'table_row';

        return (
            <div id={this.props.id} onClick={this.handleRowClick} className={rowState}>
                <div className="table_cell">
                {this.state.selected ? <Icon name="check-circle" /> : null}
                <Icon name="folder"/>
                {this.props.options.name}
                </div>
                <div className="table_cell">{this.props.options.date}</div>
                <div className="table_cell">{this.props.options.sharing}</div>
                <div className="table_cell">{this.props.options.size}</div>
            </div>
        );
    }
}
export default TableRow;