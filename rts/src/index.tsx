// import React from 'react';
import ReactDOM from 'react-dom';
// import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import UserSearchFocusInit from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
      <UserSearchFocusInit />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
