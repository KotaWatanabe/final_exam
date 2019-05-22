import React, { Component } from 'react';
import HomePage from './HomePage';
import AuctionIndexPage from './AuctionIndexPage';
import { AuctionShowPage } from "./AuctionShowPage";
import { SignInPage } from './SignInPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { AuctionNewPage } from "./AuctionNewPage";
import { User } from '../api/user';

class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        currentUser: null,
      }
    }

    componentDidMount() {
      this.getCurrentUser();
    }

    getCurrentUser = () => {
      return User.current().then((user) => {
        this.setState({ currentUser: user });
      });
    };

    signOut = () => {
      this.setState({
        currentUser: null
      });
    };

    render() {
      return (
        <BrowserRouter>
          <main className="App">
            <NavBar 
              currentUser={this.state.currentUser} 
              onSignOut={this.signOut} 
             />
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/auctions" component={AuctionIndexPage}/>
              <Route
              exact
              path="/sign_in"
              render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />}
            />
              <Route exact path="/auctions/new" component={AuctionNewPage} />
              <Route exact path="/auctions/:id" component={AuctionShowPage} />
            </Switch>
          </main>
        </BrowserRouter>
      );
    }

}

export default App;
