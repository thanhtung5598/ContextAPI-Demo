import React from 'react';
import UserModule from './components/UserModule/index';
import { UserProvider, UserConsumer } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <UserConsumer>
          {props => <UserModule {...props} />}
        </UserConsumer>
      </div>
    </UserProvider>
  );
}

export default App;
