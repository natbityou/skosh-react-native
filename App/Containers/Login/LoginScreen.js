import React from 'react'
import { ImageBackground, Alert, TouchableOpacity, Text, ActivityIndicator, Image, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, View, TextInput, } from 'react-native';
import styles from './LoginScreenStyle';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import LoginActions from 'App/Stores/Login/Actions'
import { Images } from 'App/Theme'



class LoginScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <ImageBackground source={Images.background} style={styles.backgroundImage}>
                    {this.props.loginIsLoading ? (
                        <View style={{ marginTop: 250 }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                     ) : (
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.loginScreenContainer}>
                                <View style={styles.logoContainer}>
                                    <Image style={styles.logo} source={Images.logo} resizeMode={'contain'} />
                                </View>
                                <View style={styles.loginFormView}>
                                    <TextInput placeholder = "Email" placeholderTextColor='white' style = {styles.loginFormInput}
                                            autoCapitalize = 'none'
                                            returnKeyType = "next"
                                            ref={(input) => this.emailInput = input}
                                            onSubmitEditing={() => this.passwordInput.focus()}
                                    />
                                    <TextInput placeholder = "Password" placeholderTextColor ="white" style = {styles.loginFormInput}
                                        returnKeyType= "go"
                                        secureTextEntry 
                                        ref={(input) => this.passwordInput = input}
                                    />  
                                    <TouchableOpacity
                                        onPress={ () => this._login()}>
                                        <Text style={styles.loginText}>Log in</Text> 
                                    </TouchableOpacity>
                                    <View style={styles.registerContainer}>
                                        <View style={styles.row}>
                                            <Text style={styles.text}>Don't have an account?</Text>     
                                            <TouchableOpacity
                                                onPress={ () => this.props.navigation.navigate('Register')}>
                                                <Text style={styles.registerText}>Register.</Text> 
                                            </TouchableOpacity>
                                            {this._renderErrorMessage()}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )}   
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
    _renderErrorMessage() {
        if (this.props.loginErrorMessage) {
            return  Alert.alert(
                'Invalid email or password',
                '',
                [
                  {text: 'Try Again', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );     
        }
        {this.props.loginErrorMessage};
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