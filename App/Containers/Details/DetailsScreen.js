import React from 'react'
import { Image, Text, FlatList, View } from 'react-native'
import styles from './DetailsScreenStyle'

export default class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
          this.state = {
            data: [
              {id:1, username: "Natasha", image:"https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80 667w", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  ligula..."},
              {id:2, username: "Derek", image:"https://images.unsplash.com/photo-1567870829263-cbf61e478eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80 375w", description:"Lorem  dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula..."} ,
              {id:3, username: "Marilyn", image:"https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", description:"Lorem ipsum dolor sit , consectetuer  elit. Aenean commodo ligula..."}, 
              ]
          };
        }
 
render() {
    return (
    <View style={styles.container}> 
            <Image style={styles.iconData} source={{uri:"https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80 667w"}}/>
            <Text style={styles.title}>Pick up litter</Text>
            <Text style={styles.description}>This Skosh challeges you pick up 1 or 2 pieces of litter off the ground today.
                Let's inspire other people to pick up litter with a little kind gesture for mother nature and to keep our neighbourhood beautiful and clean. 
            </Text>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
        }}
        renderItem={(post) => {
        const item = post.item;
          return (
            <View>
             <Image style={styles.people} source={{uri:item.image}}/>
          </View>
            )
          }}/>
        </View>
      );
    }
  }
  




