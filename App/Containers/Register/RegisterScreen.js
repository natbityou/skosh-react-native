import React from 'react'
import { Alert, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Modal, ScrollView, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, View,} from 'react-native'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import RegisterActions from 'App/Stores/Register/Actions'
import styles from './RegisterScreenStyle'
import CameraRoll from '@react-native-community/cameraroll'
import { Images } from 'App/Theme'


class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            photos: []
        };
    }

    render() {
        return (
            <KeyboardAvoidingView style = {{ flex: 1 }} behavior={"padding"}>
                <ImageBackground source={Images.background} style={styles.backgroundImage}>
                    <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                    >
                        <View style={{flex: 1, backgroundColor: 'white'}}>
                            <TouchableOpacity style={styles.closeButton}
                                onPress={() => { this._closeCameraRoll(); }}>
                                <Text style={styles.closeButton}>Cancel</Text>
                            </TouchableOpacity>
                            <ScrollView style={styles.camerarollContainer}>
                                <View style={styles.imageGrid}>
                                    {this.state.photos.map((p, i) => {
                                        return (
                                            <TouchableOpacity key={i} onPress={() => { this._renderRegisterImage(p.node.image.uri); this._closeCameraRoll(); }}>
                                                <Image style={styles.picture} key={i} source={{ uri: p.node.image.uri }} />      
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>  
                            </ScrollView>
                        </View>
                    </Modal>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView style={styles.registerScreenContainer}>                                  
                                <TouchableOpacity style={styles.cameraButton}
                                    onPress={() => { this._loadCameraRoll(); }}>
                                    <Image style={styles.avatar} source=
                                        { this.props.userAvatar
                                            ? ({uri: this.props.userAvatar})
                                            : Images.avatar
                                        }
                                    />
                                    <Text style={styles.uploadText}>Select a Profile Picture</Text>
                                
                                </TouchableOpacity> 
                                <View style={styles.registerFormView}>
                                <TextInput placeholder = 'username' placeholderTextColor = 'white' style = {styles.loginFormInput}
                                    autoCapitalize = 'none'
                                    returnKeyType = 'next'
                                    ref={(input) => this.usernameInput = input}
                                    onSubmitEditing={() => this.emailInput.focus()}
                                />
                                <TextInput placeholder = 'email' placeholderTextColor = 'white' style = {styles.loginFormInput}
                                    autoCapitalize = 'none'
                                    returnKeyType = 'next'
                                    ref={(input) => this.emailInput = input}
                                    onSubmitEditing={() => this.passwordInput.focus()}
                                />
                                <TextInput placeholder = 'password' placeholderTextColor ='white' style = {styles.loginFormInput}
                                    returnKeyType= 'go'
                                    secureTextEntry 
                                    ref={(input) => this.passwordInput = input}
                                    />                          
                                <TouchableOpacity
                                    onPress={ () => this._register()}>
                                    <Text style={styles.registerText}>Register</Text> 
                                </TouchableOpacity>
                                
                                {/* {this._renderRegisterErrorMessage()} */}
                            </View>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
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
    _register() {
        const registerData = {
            'avatar': this.props.userAvatar,
            'username': this.usernameInput._lastNativeText,
            'email': this.emailInput._lastNativeText,
            'password': this.passwordInput._lastNativeText,
        }
        this.props.register(registerData);

    }

    _renderRegisterErrorMessage() {
         if (this.props.registerErrorMessage) {
            console.log('hello')
            return Alert.alert(
                this.props.registerErrorMessage,
                "",
                [
                    { text: 'Try Again', onPress: () => console.log('Try Again Pressed') },
                ],
                { cancelable: false },
            );
        }
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