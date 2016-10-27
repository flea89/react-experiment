import React from 'react';
import {DropDownMenu, MenuItem} from 'material-ui';


class CategoryCell extends React.Component {
  updateCategory(event, index, value) {
    this.props.actions.updateStatementCategory(this.props.id, value);
  }

  render() {
    let currCategory = this.props.category || 'no-category';

    return (
      <DropDownMenu value={currCategory} onChange={(...args) => this.updateCategory(...args)}>
        {
          this.props.categories.map((category) =>
            <MenuItem key={category} value={category} primaryText={category} />)
        }
      </DropDownMenu>
    );
  }
}

CategoryCell.propTypes = {
  id: React.PropTypes.number,
  categories: React.PropTypes.array,
  category: React.PropTypes.string,
  actions: React.PropTypes.object
};


export default CategoryCell;
