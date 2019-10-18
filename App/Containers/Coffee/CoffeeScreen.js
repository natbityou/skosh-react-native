import React from 'react'
import { Image, Text, View, FlatList, TouchableHighlight, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native'
import CameraRoll from "@react-native-community/cameraroll";
import styles from '../Shared/SkoshScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class CoffeeScreen extends React.Component {
  
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
            modalVisible: false,
            modalVisible2: false,
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

    _loadProfile = () => {
        this.setState({modalVisible2: true});
    };

    _closeProfile = () => {
        this.setState({modalVisible2: false});
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
           <Text style={styles.cardTitle}>Join the kindness train!</Text> 
            <View>
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
                    this._loadCameraRoll();
                }}>
                <Icon style={styles.uploadicon} name="upload" size={30} color="black"/>
                <Text style={styles.uploadText}>Upload your deed</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible2}
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
            </View>       
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