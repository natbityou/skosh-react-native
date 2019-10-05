import React from 'react'
import { Button, View, TextInput, StatusBar } from 'react-native';
import styles from './RegisterScreenStyle'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import RegisterActions from 'App/Stores/Register/Actions'

class RegisterScreen extends React.Component {
    componentDidMount() {
    }
    
    static navigationOptions = {
        title: 'SKOSH',
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar 
            barStyle="light-content"
            />
            <TextInput style = {styles.input}
                    placeholder = "username"
                    returnKeyType = "next"
                    ref={(input) => this.usernameInput = input}
                    onSubmitEditing={() => this.emailInput.focus()}
            />
            <TextInput style = {styles.input}
                    placeholder = "email"
                    returnKeyType = "next"
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    />
            <TextInput style = {styles.input}
                    placeholder = "password" 
                    returnKeyType= "go"
                    secureTextEntry 
                    ref={(input) => this.passwordInput = input}
                    />
            <Button title="Register" onPress={ () => this._register()} />
            </View>
        );
    }

    _register() {
        const registerData = {
            'username' : this.usernameInput._lastNativeText,
            'email': this.emailInput._lastNativeText,
            'password' : this.passwordInput._lastNativeText,
        }

        this.props.register(registerData);
    }
}

RegisterScreen.propTypes = {
    register: PropTypes.func
  }
  
  const mapStateToProps = (state) => ({
  })
  
  const mapDispatchToProps = (dispatch) => ({
    register: (registerData) => dispatch(RegisterActions.register(registerData)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterScreen)