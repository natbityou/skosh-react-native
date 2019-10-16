import React from 'react'
import { TouchableOpacity, Alert, TouchableHighlight, Modal, ScrollView, Keyboard, Image, Text, TouchableWithoutFeedback, KeyboardAvoidingView, View, TextInput,} from 'react-native';
import styles from './RegisterScreenStyle'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import RegisterActions from 'App/Stores/Register/Actions'
import CameraRoll from "@react-native-community/cameraroll";



class RegisterScreen extends React.Component {

        constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            photos: []
        };
    }

    _loadCameraRoll = () => {
        CameraRoll.getPhotos({
                first: 20,
                assetType: 'Photos',
            })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
        });

        this.setState({modalVisible: true});
    };

    _closeCameraRoll = () => {
        this.setState({modalVisible: false});
    }

    _renderRegisterImage(imageUri) {
        // console.log('Selected image: ', uri)
        this.props.registerImage(imageUri);
    }
        

    render() {
        return (
            // <View> 
                /*  */
                <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                    <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                    >
                        <View style={{flex: 1, backgroundColor: 'white'}}>
                            <ScrollView style={styles.camerarollContainer}>
                                <View style={styles.imageGrid}>
                                    {this.state.photos.map((p, i) => {
                                        return (
                                            <TouchableHighlight onPress={() => {this._renderRegisterImage(p.node.image.uri); this._closeCameraRoll();}}>
                                                <Image style={styles.picture} key={i} source={{ uri: p.node.image.uri }} />      
                                            </TouchableHighlight>
                                        );
                                    })}
                                </View>
                                    <TouchableHighlight
                                        onPress={() => {
                                        this._closeCameraRoll();
                                        }}>
                                        <Text>Cancel</Text>
                                    </TouchableHighlight>
                            </ScrollView>
                        </View>
                    </Modal>
                    <Text style={styles.topText}>A skosh of kindness to make the world a better place </Text>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.registerScreenContainer}>
                            <View style={styles.registerFormView}>
                                <TouchableOpacity style={styles.cameraButton}
                                    onPress={() => {
                                        this._loadCameraRoll();
                                    }}>
                                    <Image style={styles.avatar} source=
                                        { this.props.userAvatar
                                            ? ({uri: this.props.userAvatar})
                                            : ({uri: "https://bootdey.com/img/Content/avatar/avatar1.png"})
                                        }
                                    />
                                    <Text style={styles.uploadText}>Select a Profile Picture</Text>
                                </TouchableOpacity> 
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
    userAvatar: PropTypes.string,
    registerImage: PropTypes.func,
  }
  
    const mapStateToProps = (state) => ({
        registerErrorMessage: state.register.registerErrorMessage,
        userAvatar : state.register.avatar,
    })
  
    const mapDispatchToProps = (dispatch) => ({
        register: (registerData) => dispatch(RegisterActions.register(registerData)),
        registerImage: (uri) => dispatch(RegisterActions.registerImage(uri)),
    })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterScreen)