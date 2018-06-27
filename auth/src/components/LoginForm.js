import React from 'react'
import {Text} from 'react-native'

import { Button, Card, CardSection,Input, Spinner} from './common'
import firebase from 'firebase'

 

class LoginForm extends React.Component {
    state = {email: '', password:'', error:'', loading: false}

    onButtonPress() {
        const {email, password,error} = this.state;
        
        this.setState({error:'', loading: true})

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this))
            })
    }

    onLoginSuccess () {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFail () {
        this.setState({error: 'Authentication Failed', loading: false})
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />
        } else {
            return (
                <Button onPress = {this.onButtonPress.bind(this)}>
                    Login
                </Button>
            )
        }
    }


    render() {
        return (

            <Card>
                
                <CardSection>
                    <Input 
                        onChangeText={email => this.setState({email})}
                        value={this.state.email} 
                        label='Email'
                        placeholder='user@gmail.com'
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        onChangeText={password => this.setState({password})}
                        value={this.state.password} 
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>


        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default LoginForm;