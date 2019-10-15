import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    iconData:{
        height: 200,
        width: null,
    },
    title:{
        fontSize:25,
        paddingTop:10,
        paddingLeft:10,
    },

    description:{
        fontSize:20,
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15,
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
    cardTitle:{
        fontSize:18,
        textAlign: 'center',
        paddingTop: 20,
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
    upload:{
        fontSize: 18,
        paddingTop:10,
    }
});   


