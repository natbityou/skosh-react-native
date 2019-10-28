import React from 'react'
import { Image, Text, TextInput, FlatList, View, SafeAreaView, TouchableHighlight, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";
import styles from '../Shared/SkoshScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import SkoshActions from 'App/Stores/Skosh/Actions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class LitterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalUpload: false,
            modalCameraRoll: false,
            photos: []
        };
    }
            
    //Upload page modal
    _loadUploadPage = () => {
    this.setState({modalUpload: true});
    };
    
    _closeUploadPage = () => {
        this.setState({modalUpload: false});
    };

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
                <Text style={styles.title}>Pick up litter</Text>
                <Text style={styles. description}>This Skosh challeges you pick up 1 or 
                                                2 pieces of litter off the ground today.
                                                Let's inspire other people to pick up 
                                                litter with a little kind gesture for 
                                                mother nature and to keep our
                                                neighbourhood beautiful and clean.
                </Text>  
                <Text style={styles.cardTitle}>Join the kindness train!</Text>   
                <ScrollView style={styles.scroll}>

            
                    <FlatList 
                        style={styles.list}
                        numColumns={4}
                        data={this.props.skoshAvatars}
                        keyExtractor= { (item, key) => {
                            return key;
                        }}
                        
                        ItemSeparatorComponent={() => {
                            return (
                            <View style={styles.separator}/>
                            )
                        }}
                        renderItem={(flatListItem) => {
                            const item = flatListItem.item;

                            return (
                                <View style={ styles.card }>
                                    <TouchableOpacity onPress={() => { this._renderSkoshProfile(item.user_id, item.avatar) }}>
                                        <Image 
                                            style={ styles.avatar }
                                            source={{ uri: 'data:image/png;base64,' + item.avatar }}
                                        />
                                    </TouchableOpacity>
                                </View>
                        )
                    }}/>
                </ScrollView>    
                <TouchableOpacity
                    onPress={() => {
                        this._loadUploadPage();
                    }}>
                    <Icon style={styles.uploadicon} name="upload" size={30} color="black"/>
                    <Text style={styles.uploadText}>Upload your deed</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalUpload}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
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
                    <TextInput placeholder = "Write a caption..." placeholderColor ="c4c3cb" style = {styles.uploadFormInput}
                                            autoCapitalize = 'none'
                                            ref={(input) => this.captionInput = input}
                                        />
                    <TouchableOpacity
                        onPress={ () => this._skoshSubmit()}>
                        <Text style={styles.submit}>Sumbit Skosh</Text> 
                    </TouchableOpacity>
                    <TouchableHighlight style={styles.back} 
                                        onPress={() => {this._closeUploadPage();
                                        }}
                    >
                        <Text>Back</Text>
                    </TouchableHighlight>

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

    _renderSkoshErrorMessage() {
        if (this.props.skoshErrorMessage) {
            return <Text style={styles.error}>{this.props.skoshErrorMessage}</Text>;
        }
    }
    _renderSkoshProfile(userId, userAvatar) { 
        this.props.skoshProfile(userId);
        this.props.setProfileAvatar(userAvatar);
    }
}

LitterScreen.propTypes = {
    skoshImage: PropTypes.func, 
    userSkoshPhoto: PropTypes.string,
    skoshSubmit: PropTypes.func,
    skoshErrorMessage: PropTypes.string,
    skoshAvatars: PropTypes.array,
    skoshProfile: PropTypes.func,
    setProfileAvatar: PropTypes.func,
}

const mapStateToProps = (state) => ({
    userSkoshPhoto : state.skosh.skoshPhoto,
    skoshErrorMessage: state.skosh.skoshErrorMessage,
    skoshAvatars: state.skosh.skoshAvatars,
})

const mapDispatchToProps = (dispatch) => ({
    skoshSubmit: (skoshData) => dispatch(SkoshActions.skoshSubmit(skoshData)),
    skoshImage: (uri) => dispatch(SkoshActions.skoshImage(uri)),   
    skoshProfile: (userId) => dispatch(SkoshActions.skoshProfile(userId)),
    setProfileAvatar: (userAvatar) => dispatch(SkoshActions.setProfileAvatar(userAvatar)),
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LitterScreen)