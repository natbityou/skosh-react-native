import React from 'react'
import { Button, ActivityIndicator, Keyboard, Text, TouchableWithoutFeedback, KeyboardAvoidingView, View, TextInput, } from 'react-native';
import styles from './LoginScreenStyle';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import LoginActions from 'App/Stores/Login/Actions'


class LoginScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                {this.props.loginIsLoading ? (
                    <View style={{ marginTop: 250 }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                 ) : (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <Text style={styles.logoText}>SKOSH</Text>
                            <TextInput placeholder = "email" placeholderColor ="c4c3cb" style = {styles.loginFormInput}
                                autoCapitalize = 'none'
                                returnKeyType = "next"
                                ref={(input) => this.emailInput = input}
                                onSubmitEditing={() => this.passwordInput.focus()}
                            />
                            <TextInput placeholder = "password" placeholderColor ="c4c3cb" style = {styles.loginFormInput}
                                returnKeyType= "go"
                                secureTextEntry 
                                ref={(input) => this.passwordInput = input}
                                />   
                            <Button
                            buttonStyle={styles.loginButton}
                            onPress={() => this._login()}
                            title="Login"
                            />    
                            <Button buttonStyle={styles.loginButton}
                            onPress={ () => this.props.navigation.navigate('Register')} 
                            title="Register" />  
                            {this._renderErrorMessage()}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                )                   
                }
            </KeyboardAvoidingView>
        );
    }

    componentDidMount() {
    }
  
    componentWillUnmount() {
    }

    _renderErrorMessage() {
        if (this.props.loginErrorMessage) {
            return <Text style={styles.error}>{this.props.loginErrorMessage}</Text>;
        }
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
    login: PropTypes.func,
    loginIsLoading: PropTypes.bool,
    loginErrorMessage: PropTypes.string,
  }
  
  const mapStateToProps = (state) => ({
    loginIsLoading: state.login.loginIsLoading,
    loginErrorMessage: state.login.loginErrorMessage,
  })
  
  const mapDispatchToProps = (dispatch) => ({
    login: (loginData) => dispatch(LoginActions.login(loginData)),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginScreen)