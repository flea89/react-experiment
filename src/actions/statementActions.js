
const statementActions = {
  assignToCategory(id, category) {
    return {
      type: 'STATEMENTS/ASSIGN_TO_CATEGORY',
      id,
      category,

    };
  },
  showActions() {
    return {
      type: 'STATEMENTS/SHOW_ACTIONS',
    };
  }
};

export default statementActions;
