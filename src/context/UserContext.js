/* eslint-disable react/react-in-jsx-scope */
import React, { createContext, useState } from 'react';

const UserContext = createContext({})

const USER_DATA = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Quynh',
    age: 29,
    address: '111B Ly Thanh Tong',
  },
];

export const UserProvider = (props) => {
  const [useList, setUserList] = useState(USER_DATA)
  const handleAdd = (dataUser) => {
    console.log('add user here');
    setUserList([...useList, dataUser])
  }

  const dataStore = {
    userData: useList, 
    handleAdd
  }

  return (
    <UserContext.Provider value={dataStore}>
      {props.children}
    </UserContext.Provider>
  )
}

export const UserConsumer = UserContext.Consumer
export default UserContext;
