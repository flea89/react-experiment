import {connect} from 'react-redux';
import Statement from '../components/statement';
import statementAction from '../actions/StatementActions';


function mapStateToProps(state, ownProps) {
  return {
    statement: state.statements[ownProps.id],
    categories: state.categories
  };
}


function mapDispatchToProps(distpatch, ownProps) {
  return {
    updateCategory(category) {
      distpatch(statementAction.assignToCategory(ownProps.id, category));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Statement);
