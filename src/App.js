import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import {Route , Switch} from 'react-router-dom';

import ShopPage from './pages/shop/shop.component.jsx';

import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// const HatsPage = () => (
//   <div>

//     <h1>IN HATS PAGE</h1>
//   </div>
// );
import {auth} from './components/firebase/firebase.utils';


class App extends React.Component {

  constructor(){
    super() ;
    this.state = {
      currentUser : null
    };

    
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    });
  }



  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div className="App">
      <Header currentUser ={this.state.currentUser}> 

      </Header>
      <Switch>
        <Route  exact path='/' component={HomePage}  />

        <Route  path='/shop' component={ShopPage} />

        <Route path='/signin' component ={SignInAndSignUpPage} /> 


      </Switch>
    </div>
  );}
}

export default App ;
