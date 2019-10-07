import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './HomeScreenStyle'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: [
          {id:1, title: "Pick up litter",time:"2018-08-01 12:15 pm", image:"https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80 667w", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula..."},
          {id:2, title: "Pay for strangers coffee",time:"2018-08-12 12:00 pm", image:"https://images.unsplash.com/photo-1567870829263-cbf61e478eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80 375w", description:"Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."} ,
          {id:3, title: "Donate your unneeded items",time:"2017-08-05 12:21 pm", image:"https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", description:"Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula..."}, 
          ]
      };
    }

  render() {
  return (
  <View style={styles.container}> 
      <Text style={styles.Text}>Hello {this.props.user ? this.props.user.username : 'Good Citizen'}!</Text>
      <FlatList style={styles.list}
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
          <View style={styles.card} onPress={() => this.details}>
            <Image style={styles.cardImage} source={{uri:item.image}}/>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.timeContainer}>
                      <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/calendar.png'}}/>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                  </View>
                </View>
            <View style={styles.cardFooter}>
              <View style={styles.socialBarContainer}>
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/material/96/2ecc71/visible.png'}}/>
                    <Text style={styles.socialBarLabel}>78</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                    <Text style={styles.socialBarLabel}>25</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          )
        }}/>
      </View>
    );
  }
   _details() {
  NavigationService.navigate('Details')
  }
}

  
HomeScreen.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.login.user,
})
  
  const mapDispatchToProps = (dispatch) => ({
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeScreen)