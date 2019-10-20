import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './HomeScreenStyle'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'; 'react-native-vector-icons/Feather';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
    backgroundColor: '#f77754',
    },
    headerTintColor: '#fff'
  }

  constructor(props) {
    super(props);
      this.state = {
        data: [
          {
            id: 1,
            title: "Pick up litter",
            image: "https://images.unsplash.com/photo-1563245159-f793f19d8c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80", 
            description: "This Skosh challeges you to pick up 1 or 2 pieces of litter off the ground today. Let's inspire..."
          },
          {
            id: 2,
            title: "Pay for a strangers coffee",
            image: "https://images.unsplash.com/photo-1556742059-47b93231f536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", 
            description: "Let's make someone's day buy paying for their coffee."
          },
          {
            id: 3,
            title: "Donate your unused items",
            image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", 
            description: "Your items aren’t paying rent, so what are you keeping them?"
          }, 
        ]
      };
    }

  render() {
  return (
  <View style={styles.container}> 
      <Text style={styles.Text}>Let the acts of kindness begin!</Text>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
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
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{uri:item.image}}/>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity onPress={() => console.log('puff')} style={styles.socialBarButton}>
                    <Icon style={styles.handicon} name="handshake-o" size={30} color="#f77754" />
                      <Text style={styles.socialBarLabel}>{this.props.skoshTypes[item.id-1].total}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity style={styles.socialBarButton}
                      onPress={() => {
                        if (item.id == 1) {
                          this.props.navigation.navigate('Litter')
                        } 
                        else if (item.id == 2) {
                          this.props.navigation.navigate('Coffee')
                        } 
                        else if (item.id == 3) {
                          this.props.navigation.navigate('Donate')
                        }
                        else console.log('puff')
                      }}
                    >
                      <Icon style={styles.arrowicon} name="arrow-right" size={30} color="#f77754" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )
        }}/>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  user: PropTypes.object,
  skoshTypes: PropTypes.object,
}

const mapStateToProps = (state) => ({
  user: state.login.user,
  skoshTypes: state.home.skoshTypes,
})
  
const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
