import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LogIn from './components/AuthComponents/LogIn/LogIn';
import Register from './components/AuthComponents/Register/Register';
import About from './components/HomeComponents/About/About';
import Home from './components/HomeComponents/Home/Home';
import Footer from './components/SharedComponents/Footer/Footer';
import NavBar from './components/SharedComponents/NavBar/NavBar';
import NotFoundRoute from './components/SharedComponents/NotFoundRoute/NotFoundRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={LogIn} />
          <Route path='/register' component={Register} />
          <Route path='*' component={NotFoundRoute} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
