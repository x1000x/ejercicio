import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import Homepage from './pages/homepage/homepage.component';

class App extends React.Component{
  constructor(){
    super(); 

    this.state= { 
      currentUser: null
    };
  }

  //life cycles: 
  //mount: montado,
  //updateMount: actualizado, 
  //willMount: desmontado

  componentDidMount(){

  }
  componentWillUnmount(){

  }
  render(){
    return(
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signIn" component={SignInAndSignUpPage}/>
         
        </Switch>
      </div>
    )
  }
}

export default App;
