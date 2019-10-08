import React from 'react'
import { TouchableOpacity, Keyboard, Text, TouchableWithoutFeedback, KeyboardAvoidingView, View, TextInput,} from 'react-native';
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
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <Text style={styles.topText}>A skosh of kindness to make the world a better place </Text>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.registerScreenContainer}>
                        <View style={styles.registerFormView}>
                            <TextInput placeholder = "username" placeholderColor ="c4c3cb" style = {styles.loginFormInput}
                                autoCapitalize = 'none'
                                returnKeyType = "next"
                                ref={(input) => this.usernameInput = input}
                                onSubmitEditing={() => this.emailInput.focus()}
                            />
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
                            <TouchableOpacity
                                onPress={ () => this._register()}>
                                <Text style={styles.registerText}>Register</Text> 
                            </TouchableOpacity>
                            {this._renderRegisterErrorMessage()}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }

    _renderRegisterErrorMessage() {
        if (this.props.registerErrorMessage) {
            return <Text style={styles.error}>{this.props.registerErrorMessage}</Text>;
        }
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
    register: PropTypes.func,
    registerErrorMessage: PropTypes.string,
  }
  
    const mapStateToProps = (state) => ({
        registerErrorMessage: state.register.registerErrorMessage,
    })
  
    const mapDispatchToProps = (dispatch) => ({
        register: (registerData) => dispatch(RegisterActions.register(registerData)),
    })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterScreen)