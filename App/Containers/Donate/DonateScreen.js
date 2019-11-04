import React from 'react'
import { Image, Text, FlatList, View, TouchableOpacity, ScrollView, } from 'react-native'
import styles from '../Shared/SkoshScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import SkoshActions from 'App/Stores/Skosh/Actions';


class DonateScreen extends React.Component {
     render() {
        return (
            <View>
                <Text style={styles.title}>Donate your unused items</Text>
                <Text style={styles. description}>Your items aren’t paying rent, so what are you keeping them? 
                    There are many families in need of usable items. 
                    There are disaster victims, underprivileged people, 
                    and children in need, and your donations can help.</Text>
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
                                        <TouchableOpacity onPress={() => { this._renderSkoshProfile(item) }}>
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
                        onPress={ () => this.props.navigation.navigate('Upload')}>                        
                        <Icon style={styles.uploadicon} name="upload" size={30} color="black"/>
                        <Text style={styles.uploadText}>Upload your deed</Text>
                    </TouchableOpacity>
               </View>
            );
        }
    _renderSkoshProfile(user) { 
        this.props.skoshProfile(user.user_id);
        this.props.setProfileData(user);
    }
}

DonateScreen.propTypes = {
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
)(DonateScreen)