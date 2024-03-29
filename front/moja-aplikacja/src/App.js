import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Basket from './components/Basket/Basket';
import Footer from './components/Footer/Footer';
import BooksList from './components/Books/BooksList';

const App = () => {
  return (
    <>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={BooksList}></Route>
          <Route path='/basket' component={Basket}></Route>
        </Switch>
        <Footer />
      </div>
    </>
  )
}

export default App;
