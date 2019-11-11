import React from 'react'
import { Image, Text, FlatList, View, TouchableOpacity, ScrollView, } from 'react-native';
import styles from '../Shared/SkoshScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import SkoshActions from 'App/Stores/Skosh/Actions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class LitterScreen extends React.Component {
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
                <Text style={styles.cardTitle}>People who picked up litter</Text>   
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
                            console.log(item);
                            return (
                                <View style={ styles.card }>
                                    <TouchableOpacity onPress={() => { this._renderSkoshProfile(item) }}>
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
                    <Text style={styles.uploadText}>Upload your Skosh</Text>
                </TouchableOpacity>
           </View>
        );
    }
    _renderSkoshProfile(user) { 
        this.props.skoshProfile(user.user_id);
        this.props.setProfileData(user);
    }
}

LitterScreen.propTypes = {
    userSkoshPhoto: PropTypes.string,
    skoshAvatars: PropTypes.array,
    skoshProfile: PropTypes.func,
    setProfileData: PropTypes.func,
}

const mapStateToProps = (state) => ({
    userSkoshPhoto : state.skosh.skoshPhoto,
    skoshAvatars: state.skosh.skoshAvatars,
})

const mapDispatchToProps = (dispatch) => ({
    skoshProfile: (userId) => dispatch(SkoshActions.skoshProfile(userId)),
    setProfileData: (user) => dispatch(SkoshActions.setProfileData(user)),
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LitterScreen)