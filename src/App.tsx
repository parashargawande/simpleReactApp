import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { IUser } from './Interfaces'
import Users from './Users';

function App() {
  const api: string = "https://randomuser.me/api";

  const [error, setError] = useState(false)
  const [users, setUsers] = useState<IUser[] | null>(null)
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchdata = async () => {
    try {
      setLoading(true)
      setError(false)
      const { data } = await axios.get(api)
      const users: IUser[] = data.results
      localStorage.setItem('users', JSON.stringify(users))
      setUsers(users)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [refresh])

  if (error) {
    return <div className="error">
      Something went wrong.
    </div>
  }

  if (loading) {
    return <div className="loader">
      loading...
    </div>
  }

  return (
    <div className="app">
      <button onClick={() => { setRefresh(!refresh) }}>Refresh Data</button>
      <Users users={users} />
    </div>
  );
}

export default App;
