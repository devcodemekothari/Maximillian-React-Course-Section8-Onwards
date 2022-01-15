import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const users = [
    {
      name:'Dev',
      age: '27'
    }
  ];

  return (
    <div>
      <AddUser></AddUser>
      <UsersList users={users}></UsersList>            
    </div>
  );
}

export default App;
