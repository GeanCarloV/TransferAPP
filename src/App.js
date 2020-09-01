import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from  './components/Login/Login'
import Home from './components/Home/Home'
import Transfer from './components/Transfer/Transfer'
import Navbar from './components/Layout/Navbar'
// context 
import LoginState from './context/autentificacion/loginState'
import TransferState from './context/transfer/transferState'


function App() {
  return (
    <TransferState>
      <LoginState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/transfer" component={Transfer} />
          </Switch>
        </Router>
      </LoginState>
    </TransferState>
  );
}

export default App;
