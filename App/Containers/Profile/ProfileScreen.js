import React from 'react'
import { TouchableOpacity, Image, Text, FlatList, View, ScrollView, } from 'react-native';
import styles from './ProfileScreenStyle';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class ProfileScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}> 
        <View style={styles.headerData}>
          <Image
            style={ styles.avatar }
            source={{ uri: 'data:image/png;base64,' + this.props.profileAvatar }}
          />
          <Text style={styles.username}>{ this.props.profileUsername }</Text>
        </View>
        <ScrollView contentContainerStyle={{paddingBottom: 200}}>                
          <FlatList 
            style={styles.list}
            data={this.props.userSkoshes}
            
            keyExtractor= {(item) => {
              return item.id + "";
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
                    <Image
                      style={styles.cardImage}
                      source={{ uri: 'data:image/png;base64,' + item.image }}
                    />
                    <View style={styles.cardHeader}>
                        <View>
                          <Text style={styles.date}>{item.createdAt}</Text>
                          <Text style={styles.caption}>{item.caption}</Text>
                        </View>
                    </View>
                </View>          
              )
            }}
          /> 
        </ScrollView>   
      </View>
    )
  }
}

ProfileScreen.propTypes = {
  profileAvatar: PropTypes.string,
  profileUsername: PropTypes.string,
  userSkoshes: PropTypes.array,
}

const mapStateToProps = (state) => ({
  profileAvatar: state.skosh.profileAvatar,
  profileUsername: state.skosh.profileUsername,
  userSkoshes: state.skosh.skoshProfileInfo,
})

export default connect(
    mapStateToProps
)(ProfileScreen)
