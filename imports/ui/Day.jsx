import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Appointments } from '../api/appointments.js';

export default class Day extends React.Component {
  static propTypes = {

  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { arr: [] };

  }
  
  handleClick(number) { 
  
    var now = new Date();
   
    const text = ReactDOM.findDOMNode(this.refs.user).value.trim();
 
    Appointments.insert({
      name : text,
      date: new Date(now.getFullYear(), now.getMonth(), this.props.number),
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.user).value = '';
  }


  render() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), this.props.number)
    var arr = Appointments.find({date : today}).map(function(a){
      return <li key={a.id}>{a.name}</li>;
    });
    return (
      <div className="day">
        <h4 ref='number'>{this.props.number}</h4>
        <ul ref='userlist'>
          {arr}
        </ul>
        <div>
          <input ref='user' name="users" />
          <br />
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}
