import React from 'react'
import {Text} from 'react-native'

import { Button, Card, CardSection,Input } from './common'
import firebase from 'firebase'

 

class LoginForm extends React.Component {
    state = {email: '', password:'', error:''}

    onButtonPress() {
        const {email, password,error} = this.state;
        
        this.setState({error:''})

        firebase.auth().signInWithEmailAndPassword(email,password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(() => {
                    this.setState({error:'Authentication Failed'})
                })
            })
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
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
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