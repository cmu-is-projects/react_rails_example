import PropTypes from 'prop-types';
import React from 'react';


export default class Appointment extends React.Component {
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
    this.state = { };
  }




  render() {


    return (
      <div class="day">
        <p>Appointment</p>
      </div>
    );
  }
}
