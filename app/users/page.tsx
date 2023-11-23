import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
  // to store and reflesh data every 10 secs
  // { next: { revalidate: 10 } }
  //to not store data
  { cache: 'no-store' }
  )
  const users: User[] = await res.json();


  return (
    <>
      <h1>Users</h1>
      <p>{ new Date().toLocaleTimeString() }</p>
      <ul>
        { users.map(user => <li key={ user.id }>{ user.name }</li>) }
      </ul>
    </>
  )
}

export default UsersPage