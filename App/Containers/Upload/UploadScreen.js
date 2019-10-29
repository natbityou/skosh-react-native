import React from 'react'
import { Image, Text, TextInput, Button, View, TouchableHighlight, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";
import styles from '../Shared/SkoshScreenStyle';
import SkoshActions from 'App/Stores/Skosh/Actions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

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
                <ScrollView>
                    <TouchableOpacity style={styles.cameraButton}
                        onPress={() => {
                            this._loadCameraRoll();
                            }}>
                            <Image style={styles.skoshPhoto} 
                            source= { this.props.userSkoshPhoto
                            ? ({uri: this.props.userSkoshPhoto})
                            : ({uri: "https://bootdey.com/img/Content/avatar/avatar1.png"})
                        }/>
                    </TouchableOpacity> 
                        <TextInput
                            placeholder = "Write a caption..." 
                            placeholderColor ="c4c3cb"
                            style = {styles.uploadCaptionInput}
                            multiline={true}
                            autoCapitalize = 'none'
                            ref={(input) => this.captionInput = input}
                        />
                    <Button
                        title="Sumbit Skosh"
                        onPress={ () => this._skoshSubmit()}>
                    </Button>
                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalCameraRoll}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={{flex: 1, backgroundColor: 'white'}}>
                        <ScrollView style={styles.camerarollContainer}>
                            <View style={styles.imageGrid}>
                                {this.state.photos.map((p, i) => {
                                    return (
                                        <TouchableHighlight onPress={() => {this._renderSkoshImage(p.node.image.uri); this._closeCameraRoll();}}>
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
            </View>
        );
    }
    _skoshSubmit() {
        const skoshData = {
            'skoshType': 1,
            'skoshPhoto': this.props.userSkoshPhoto,
            'caption': this.captionInput._lastNativeText,
        }

        this.props.skoshSubmit(skoshData);
    }
}

UploadScreen.propTypes = {
    skoshImage: PropTypes.func, 
    skoshSubmit: PropTypes.func,
    skoshErrorMessage: PropTypes.string,

}

const mapStateToProps = (state) => ({
    userSkoshPhoto : state.skosh.skoshPhoto,
    skoshErrorMessage: state.skosh.skoshErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
    skoshSubmit: (skoshData) => dispatch(SkoshActions.skoshSubmit(skoshData)),
    skoshImage: (uri) => dispatch(SkoshActions.skoshImage(uri)),   
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UploadScreen)