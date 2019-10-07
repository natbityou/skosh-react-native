import { StyleSheet } from 'react-native'



export default StyleSheet.create({
    iconData:{
        height: 200,
        width: null,
    },
    title:{
        fontSize:25,
    },
    description:{
        fontSize:20,
    },
    camerarollContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 40,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    picture: {
        width: 100,
        height: 100,
        margin: 10,
    },
    photosContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'auto',
        justifyContent: 'center'
      },
      photosCard:{
        marginTop:10,
      },
      photo:{
        width:80,
        height:80,
        borderRadius:100,
        marginTop:5,
        marginRight:5,
      },
});   


