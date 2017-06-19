import PropTypes from 'prop-types';
import React from 'react';
import Day from '../components/Day';

export default class Calendar extends React.Component {
  static propTypes = {
    month: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { month: this.props.month };

  }


  render() {

    var rows = [];
    var count = 1;
    for (var i = 0; i < this.props.numweeks; i++){
      var cols = []
      for (var f = 0; f < 7; f++){
        if((count > this.props.first) && (count <= (parseInt(this.props.last) + parseInt(this.props.first)))) {
          cols.push(<td key={count}><Day date= {this.props.date} number= {count - this.props.first} users={this.props.users} appointments={this.props.appointments[count - this.props.first - 1]} /></td>)
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
          {this.state.month}!
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
