import React from 'react'
import { Image, Text, View, TouchableHighlight, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";
import styles from './CoffeeScreenStyle'
import Icon from 'react-native-vector-icons/Feather';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class CoffeeScreen extends React.Component {
  
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

    _renderUploadDeed(imageUri) {
        console.log('Selected image: ', imageUri)
        // this.props.UploadDeed(imageUri);
    }
        

    render() {
        return (
        <View> 
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
                                    <TouchableHighlight onPress={() => {this._renderUploadDeed(p.node.image.uri); this._closeCameraRoll();}}>
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
            <Image style={styles.iconData} source={{uri:"https://images.unsplash.com/photo-1556742059-47b93231f536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}}/>
            <Text style={styles.title}>Pay for a strangers coffee</Text>
            <Text style={styles.description}>Let's make someone's day by paying for their coffee
                                            Kindness is contagious and something we should all want to 
                                            pass on and spread to one another.</Text>
                                
            <View style={styles.photosCard}>
                <Text style={styles.cardTitle}>Join the kindness train!</Text> 
                <View style={styles.photosContainer}>  
                    <TouchableHighlight onPress={() => this._selectImage(image.uri)}>
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}} />
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={() => this._selectImage(image.uri)}>
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._selectImage(image.uri)}>
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._selectImage(image.uri)}>
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._selectImage(image.uri)}>
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}} />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this._selectImage(image.uri)}>
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
                    </TouchableHighlight>  
                </View>
            </View>       
            <TouchableOpacity
                onPress={() => {
                    this._loadCameraRoll();
                }}>
                <Icon style={styles.uploadicon} name="upload" size={30} color="black"/>
                <Text style={styles.uploadText}>Upload your deed</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

CoffeeScreen.propTypes = {
    uploadDeed: PropTypes.func,
}
const mapDispatchToProps = (dispatch) => ({
    uploadDeed: (uri) => dispatch(UploadActions.uploadDeed(uri)),
})
  
export default connect(
    mapDispatchToProps
  )(CoffeeScreen)