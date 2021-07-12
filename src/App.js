import { useState } from 'react'
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList'

function App() {
  const [users, setUsers] = useState([])
  const addUserHandler = (uName, age) => {
    setUsers((prevUsers) => { return [...prevUsers, { id: Math.random().toString(), name: uName, age: age }] })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>

  );
}

export default App;
