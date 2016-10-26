import React from 'react';
import './app.scss';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {increment} from '../actions/index';
import { connect } from 'react-redux';


class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <AppBar
          title="Title"
          iconElementRight={<FlatButton label="Increment" />}
          onRightIconButtonTouchTap={this.props.increment}/>

        <div className="notice">
          App content

          variable: {this.props.variable}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.dummyFoo;

const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(increment);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);


AppComponent.propTypes = {
  variable: React.PropTypes.number,
  increment: React.PropTypes.func
};
