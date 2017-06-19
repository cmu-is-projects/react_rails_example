import PropTypes from 'prop-types';
import React from 'react';



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

  handleClick() { 
    var date = this.props.date.split("-");
    var name = this.refs.user.value; 
    $.ajax({ 
      url: '/appointments.json', 
      type: 'POST', 
      data: { 
        appointment: { 
          user_id: name,
          time: date[0].toString() + "-" + date[1].toString() + "-" + this.props.number.toString()
        } }, 
        success: (item) => { 
          var user = this.props.users[parseInt(name) - 1];
          this.setState({
            arr: this.state.arr.concat([<li>{user.firstname} {user.lastname}</li>])
          })
        } 
    });
  }

  componentWillMount(){
    for(var f = 0; f < this.props.appointments.length; f++){
      var user = this.props.users[parseInt(this.props.appointments[f].user_id) - 1];
      this.setState({
        arr: this.state.arr.concat([<li>{user.firstname} {user.lastname}</li>])
      })
    }  
  }


  render() {

    var rows = [];
    for(var i = 0; i < this.props.users.length; i++){
      rows.push(<option key={i}value={this.props.users[i].id}>{this.props.users[i].firstname + " " + this.props.users[i].lastname}</option>);
    }




    return (
      <div class="day">
        <h4 ref='number'>{this.props.number}</h4>
        <ul ref='userlist'>
          {this.state.arr}
        </ul>
        <div>
          <select ref='user' name="users" form="users">
            {rows}
          </select>
          <br />
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}
