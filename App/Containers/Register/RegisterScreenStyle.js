import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'

export default StyleSheet.create({

    containerView: {
        flex: 1,
        backgroundColor: "#f77754",
    },
    loginScreenContainer: {
        flex: 1,
    }, 
    loginFormView: {
        flex: 1,
    },   
    topText: {
        fontSize: 20,
        paddingTop: 250,
        textAlign: 'center',
        color: 'white',
    },  
    loginFormInput: {
        height: 43,
        fontSize: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    registerText: {
        fontSize:20,
        height: 45,
        marginTop: 30,
        color:"white",
        textAlign: 'center',
        },

    cameraButton: {
        paddingLeft: 8,
        paddingTop: 20,
        alignItems: 'center',
    },
    uploadText:{
        textAlign:"center",
        color: "white",
        fontSize: 15,
    },
    error: {
        ...Fonts.style.normal,
        textAlign: 'center',
        marginBottom: 5,
        color: 'red',  
    }, 

    //Modal
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
})