import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Appointments } from '../api/appointments.js';

import Day from './Day.jsx';

//import Appointment from './Appointments.jsx';

// App component - represents the whole app
class App extends Component {
  
  lastDay() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }
 
  firstDay(){
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  }
  
  month(){
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

  var d = new Date();
  return monthNames[d.getMonth()];
  }
  
  constructor(props) {
    super(props);

    this.state = { numweeks : ((this.lastDay() / 7)),
                   first : this.firstDay(),
                   last : this.lastDay(),
                   month : this.month()
    };
    console.log(this.state.first);
  }
  
  // renderDay() {
    // return this.props.tasks.map((task) => (
      // <Day key={task._id} task={task} />
    // ));
  // }
  

  
  
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Appointments.insert({
      name,
      date: new Date(),
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }  

  render() {

    var rows = [];
    var count = 1;
    for (var i = 0; i < this.state.numweeks; i++){
      var cols = []
      for (var f = 0; f < 7; f++){
        if((count > parseInt(this.state.first)) && (count <= (parseInt(this.state.last) + parseInt(this.state.first)))) {
          cols.push(<td key={count}><Day number={count - this.state.first} /></td>)
        }else{
          cols.push(<td key={count}>_</td>)
        }
        count++;
      }
      rows.push(<tr key={i}>{cols}</tr>)
    }

    return (
      <div>
        <h1>
          {this.state.month}
        </h1>
        <hr />

        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    appointments: Appointments.find({}).fetch(),
  };
}, App);