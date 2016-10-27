import React, { Component, PropTypes} from 'react';

import { connect } from 'react-redux';
// import Statement from '../components/Statement';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow}
  from 'material-ui/Table';

import Statement from '../containers/StatementContainer';

/* Populated by react-webpack-redux:reducer */
class StatementList extends Component {
  render() {
    const { list } = this.props;
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((statement) => <Statement key={statement.id} id={statement.id}/>)}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: Object.keys(state.statements).map((k) => state.statements[k])
  };
}


StatementList.propTypes = {
  list: PropTypes.array,
  test: PropTypes.func,
  categories: PropTypes.array,
  updateStatementCategory: PropTypes.func
};

export default connect(mapStateToProps)(StatementList);
