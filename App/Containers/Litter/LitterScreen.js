import React from 'react'
import { Image, Text, FlatList, View, TouchableHighlight, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";
import styles from './LitterScreenStyle'
import Icon from 'react-native-vector-icons/Feather';

export default class LitterScreen extends React.Component {
  
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
    _selectImage(uri) {
        // define whatever you want to happen when an image is selected here
        this.setState({
          selected: uri,
        });
        console.log('Selected image: ', uri);
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
                                    <TouchableHighlight onPress={() => this._selectImage(image.uri)}>
                                        <Image style={styles.picture}  key={i} source={{ uri: p.node.image.uri }} />
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
            <Image style={styles.iconData} source={{uri:"https://images.unsplash.com/photo-1563245159-f793f19d8c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"}}/>
            <Text style={styles.title}>Pick up litter</Text>
            <Text style={styles.description}>This Skosh challeges you pick up 1 or 2 pieces of litter off the ground today.
                Let's inspire other people to pick up litter with a little kind gesture for mother nature and to keep our neighbourhood beautiful and clean. 
            </Text>
                                
            <View style={styles.photosCard}>
                <Text style={styles.cardTitle}>Join the kindness train!</Text>   
                    <View style={styles.photosContainer}>
                        <TouchableHighlight onPress={() => this._selectImage(image.uri)}>
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}} />
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}} />
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}} />
                        <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}} />
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
  
  