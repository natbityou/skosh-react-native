import React from 'react'
import { Image, Text, TextInput, Button, View, TouchableHighlight, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";
import styles from './UploadScreenStyle';
import SkoshActions from 'App/Stores/Skosh/Actions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Images } from 'App/Theme';
import Icon from 'react-native-vector-icons/FontAwesome'; 'react-native-vector-icons/FontAwesome5';

class UploadScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalCameraRoll: false,
            photos: []
        };
    }

    // Camera roll modal
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
        this.setState({modalCameraRoll: true});
    };
    _closeCameraRoll = () => {
        this.setState({modalCameraRoll: false});
    }

    _renderSkoshImage(imageUri) {
        console.log('Selected image: ', imageUri)
        this.props.skoshImage(imageUri);
    }

    render() {

        return (
            <View>
                <View>
                    <TouchableOpacity style={styles.cameraButton}
                        onPress={() => { this._loadCameraRoll(); }}
                    >
                        <Image style={styles.skoshPhoto} 
                            source= { this.props.userSkoshPhoto ? { uri: this.props.userSkoshPhoto } : Images.upload } 
                        />
                    </TouchableOpacity> 
                    <TextInput
                        placeholder = "Write a caption..." 
                        placeholderColor ="c4c3cb"
                        style = {styles.uploadCaptionInput}
                        multiline={true}
                        autoCapitalize = 'none'
                        ref={(input) => this.captionInput = input}
                    />
                </View>
                    <TouchableOpacity onPress={() => this._skoshSubmit()}>
                        <Text style={styles.submitButton}>Submit Skosh</Text> 
                    </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalCameraRoll}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={{flex: 1, backgroundColor: 'white'}}>
                        <TouchableHighlight style={styles.closeButton}
                            onPress={() => { this._closeCameraRoll(); }}>
                            <Text style={styles.closeButton}>Cancel</Text>
                        </TouchableHighlight>
                        <ScrollView style={styles.cameraRollContainer}>
                            <View style={styles.imageGrid}>
                                {this.state.photos.map((p, i) => {
                                    return (
                                        <TouchableHighlight onPress={() => {this._renderSkoshImage(p.node.image.uri); this._closeCameraRoll();}}>
                                            <Image style={styles.picture} key={i} source={{ uri: p.node.image.uri }} />      
                                        </TouchableHighlight>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        );
    }
    _skoshSubmit() {
        const skoshData = {
            'skoshType': this.props.uploadSkoshType,
            'skoshPhoto': this.props.userSkoshPhoto,
            'caption': this.captionInput._lastNativeText,
        }
        this.props.skoshSubmit(skoshData);
    }
}

UploadScreen.propTypes = {
    skoshImage: PropTypes.func, 
    skoshSubmit: PropTypes.func,
}

const mapStateToProps = (state) => ({
    uploadSkoshType: state.skosh.uploadType,
    userSkoshPhoto : state.skosh.skoshPhoto,
})

const mapDispatchToProps = (dispatch) => ({
    skoshSubmit: (skoshData) => dispatch(SkoshActions.skoshSubmit(skoshData)),
    skoshImage: (uri) => dispatch(SkoshActions.skoshImage(uri)),   
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UploadScreen)