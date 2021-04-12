import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import BoardDelete from './BoardDelete';
import BoardDetail from './BoardDetail';

class Boards extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.created_at}</TableCell>
                <TableCell>{this.props.user_name}</TableCell>
                <TableCell><BoardDetail stateRefresh={this.props.stateRefresh} id={this.props.id} title={this.props.title} context={this.props.context}/>
                           <BoardDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
            </TableRow>
        )
    }
}

export default Boards;