import ReactOnRails from 'react-on-rails';

import Calendar from '../components/Calendar';
import Day from '../components/Day';

// This is how react_on_rails can see the Calendar in the browser.
ReactOnRails.register({
  Calendar,
  Day,
});
