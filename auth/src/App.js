import React from 'react'
import {View } from 'react-native'
import {Header} from './components/common'
import firebase from 'firebase'
import LoginForm from './components/LoginForm';


class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCMloGtVWqOCmlP3NeXQHmVtgG1hAEajMg",
            authDomain: "authentication-d4fdd.firebaseapp.com",
            databaseURL: "https://authentication-d4fdd.firebaseio.com",
            projectId: "authentication-d4fdd",
            storageBucket: "authentication-d4fdd.appspot.com",
            messagingSenderId: "657493032311"
        })
    }
    
    
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        ) 
    }
}

export default App;
