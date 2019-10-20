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
            data: [
                {id:1, title: "alpaca", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
                {id:2, title: "alpaca", image:"https://bootdey.com/img/Content/avatar/avatar2.png"},
                {id:3, title: "alpaca", image:"https://bootdey.com/img/Content/avatar/avatar3.png"},
                {id:4, title: "alpaca", image:"https://bootdey.com/img/Content/avatar/avatar4.png"},
                {id:5, title: "alpaca", image:"https://bootdey.com/img/Content/avatar/avatar5.png"},
                {id:6, title: "alpaca", image:"https://bootdey.com/img/Content/avatar/avatar6.png"},
                ],
            modalUpload: false,
            modalCameraRoll: false,
            modalProfile: false,
            photos: []
        };
    }

    // Profile modal
    _loadProfile = () => {
        this.setState({modalProfile: true});
    };

    _closeProfile = () => {
        this.setState({modalProfile: false});
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
                <Image style={styles.iconData} 
                        source={{uri:"https://images.unsplash.com/photo-1563245159-f793f19d8c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                        }}
                />
                <Text style={styles.title}>Pick up litter</Text>
                <Text style={styles. description}>This Skosh challeges you pick up 1 or 
                                                2 pieces of litter off the ground today.
                                                Let's inspire other people to pick up 
                                                litter with a little kind gesture for 
                                                mother nature and to keep our
                                                neighbourhood beautiful and clean.
                </Text>  
                <Text style={styles.cardTitle}>Join the kindness train!</Text>        
                    <FlatList 
                        style={styles.list}
                        numColumns={4}
                        data={this.state.data}
                        keyExtractor= {(item) => {
                            return item.id;
                        }}
                        
                        ItemSeparatorComponent={() => {
                            return (
                            <View style={styles.separator}/>
                            )
                        }}
                    
                        renderItem={(post) => {
                        const item = post.item;
                            return (
                                <View style={styles.card}>
                                    <TouchableHighlight onPress={() => { this._loadProfile();
                                    }}>
                                        <Image style={styles.cardImage} source={{uri:item.image}}/>
                                    </TouchableHighlight>
                                </View>
                        )
                    }}/>
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
                    visible={this.state.modalProfile}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <TouchableHighlight style={styles.back}
                        onPress={() => {
                        this._closeProfile();
                        }}>
                        <Text>Back</Text>
                    </TouchableHighlight>
                </Modal>

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
                        onPress={ () => this._skoshUpload()}>
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
    _skoshUpload() {
        const skoshData = {
            'skoshType': 1,
            'skoshPhoto': this.props.userSkoshPhoto,
            'caption': this.captionInput._lastNativeText,
        }

        this.props.skoshUpload(skoshData);
    }
}


LitterScreen.propTypes = {
    skoshImage: PropTypes.func, 
    userSkoshPhoto: PropTypes.string,
    skoshUpload: PropTypes.func,
}

const mapStateToProps = (state) => ({
    userSkoshPhoto : state.skosh.userSkoshPhoto,
})

const mapDispatchToProps = (dispatch) => ({
    skoshUpload: (skoshData) => dispatch(SkoshActions.skoshUpload(skoshData)),
    skoshImage: (uri) => dispatch(SkoshActions.skoshImage(uri)),
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LitterScreen)