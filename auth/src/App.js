import React from 'react'
import {View } from 'react-native'
import {Header, Button, Spinner} from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm';


class App extends React.Component {
    state = {loggedIn: null}

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCMloGtVWqOCmlP3NeXQHmVtgG1hAEajMg",
            authDomain: "authentication-d4fdd.firebaseapp.com",
            databaseURL: "https://authentication-d4fdd.firebaseio.com",
            projectId: "authentication-d4fdd",
            storageBucket: "authentication-d4fdd.appspot.com",
            messagingSenderId: "657493032311"
        })

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return ( 
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out 
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size = "large" /> ;
      }
  }

  render() {
        return ( 
            <View >
                <Header headerText = "Authentication" /> 
                {this.renderContent()} 
          </View>
      );
  }
  }

export default App;
