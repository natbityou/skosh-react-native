import React from 'react'
import { Button, View, TextInput, StatusBar } from 'react-native';
import styles from './LoginScreenStyle'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import LoginActions from 'App/Stores/Login/Actions'

class LoginScreen extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar 
            barStyle="light-content"
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
            <Button title="Login" onPress={ () => this._login()} />
            <Button title="Register" onPress={ () => this.props.navigation.navigate('Register')} />
            </View>
        );
    }
    
    _login() {
        const loginData = {
            'email': this.emailInput._lastNativeText,
            'password' : this.passwordInput._lastNativeText,
        }

        this.props.login(loginData);
    }
}

LoginScreen.propTypes = {
    login: PropTypes.func
  }
  
  const mapStateToProps = (state) => ({
  })
  
  const mapDispatchToProps = (dispatch) => ({
    login: (loginData) => dispatch(LoginActions.login(loginData)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginScreen)