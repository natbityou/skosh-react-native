
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    // Upload Screen
    submitButton: {
        fontSize:20,
        height: 45,
        marginTop: 20,
        color:"#3e64ff",
        textAlign: 'center',
    },

    submit: {
        textAlign: 'right',
        paddingRight: 30, 
    },
    uploadCaptionInput: {
        height:200,
        width: 350,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        marginTop: 40,
        lineHeight: 23,
        alignSelf: 'center',
    },
    skoshPhoto: {
        width: 360,
        height: 200,
        marginTop: 50,
        alignSelf: 'center',
    },

    // Camera Roll
    closeButton: {
        paddingTop: 10,
        marginTop: 20,
        marginLeft: 5,
        fontSize: 20,
    },
    cameraRollContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop:40
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    picture: {
        width: 120,
        height: 120,
        margin: 2,
    },
    photosContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 'auto',
        justifyContent: 'center'
      },
    photo:{
        width:80,
        height:80,
        borderRadius:100,
        marginTop:5,
        marginRight:5,
      },
}); 
    