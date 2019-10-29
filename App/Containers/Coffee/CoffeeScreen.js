import React from 'react'
import { Image, Text, View, FlatList, TouchableOpacity,ScrollView } from 'react-native'
import styles from '../Shared/SkoshScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class CoffeeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Pay for a strangers coffee</Text>
                <Text style={styles. description}>Let's make someone's day by paying for their coffee
                                            Kindness is contagious and something we should all want to 
                                            pass on and spread to one another.</Text>
       
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
                                }}
                            />
                        </ScrollView>    
                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('Upload')}>                        
                            <Icon style={styles.uploadicon} name="upload" size={30} color="black"/>
                            <Text style={styles.uploadText}>Upload your deed</Text>
                        </TouchableOpacity>
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
       
    _renderSkoshProfile(userId, userAvatar) { 
        this.props.skoshProfile(userId);
        this.props.setProfileAvatar(userAvatar);
    }
}
       
CoffeeScreen.propTypes = {
    userSkoshPhoto: PropTypes.string,
    skoshAvatars: PropTypes.array,
    skoshProfile: PropTypes.func,
    setProfileAvatar: PropTypes.func,
}

const mapStateToProps = (state) => ({
    userSkoshPhoto : state.skosh.skoshPhoto,
    skoshAvatars: state.skosh.skoshAvatars,
})

const mapDispatchToProps = (dispatch) => ({
    skoshProfile: (userId) => dispatch(SkoshActions.skoshProfile(userId)),
    setProfileAvatar: (userAvatar) => dispatch(SkoshActions.setProfileAvatar(userAvatar)),
})
    
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoffeeScreen)