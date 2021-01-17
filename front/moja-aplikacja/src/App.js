import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage';
import Basket from './components/Basket';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/basket' component={Basket}></Route>
        </Switch>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App;
