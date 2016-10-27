import React from 'react';
import {DropDownMenu, MenuItem} from 'material-ui';

import {TableRow, TableRowColumn} from 'material-ui/Table';


class Statement extends React.Component {
  render() {
    let currCategory = this.props.statement.category || 'no-category';

    return (
      <TableRow key={this.props.statement.id}>
        <TableRowColumn>{this.props.statement.who}</TableRowColumn>
        <TableRowColumn>{this.props.statement.amount}</TableRowColumn>
        <TableRowColumn>{this.props.statement.date}</TableRowColumn>
        <TableRowColumn>
          <DropDownMenu
            value={currCategory}
            onChange={(e, index, value) => this.props.updateCategory(value)}>
          {
          this.props.categories.map((category) =>
            <MenuItem key={category} value={category} primaryText={category} />)
          }
          </DropDownMenu>
        </TableRowColumn>
      </TableRow>
    );
  }
}

Statement.propTypes = {
  statement: React.PropTypes.object,
  categories: React.PropTypes.array,
  updateCategory: React.PropTypes.func
};


export default Statement;

// class CategoryCell extends React.Component {
//   updateCategory(event, index, value) {
//     this.props.actions.updateStatementCategory(this.props.id, value);
//   }

//   render() {
//     let currCategory = this.props.category || 'no-category';

//     return (
//       <DropDownMenu value={currCategory} onChange={(...args) => this.updateCategory(...args)}>
//         {
//           this.props.categories.map((category) =>
//             <MenuItem key={category} value={category} primaryText={category} />)
//         }
//       </DropDownMenu>
//     );
//   }
// }

// CategoryCell.propTypes = {
//   id: React.PropTypes.number,
//   categories: React.PropTypes.array,
//   categories: React.PropTypes.array,
//   category: React.PropTypes.string,
//   actions: React.PropTypes.object
// };


// export default CategoryCell;
