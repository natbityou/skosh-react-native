import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'

export default StyleSheet.create({

    containerView: {
        flex: 1,
        backgroundColor: "#f77754",
    },
    backgroundImage: {
        width: '100%', 
        height: '100%',
        resizeMode: 'cover',
    },
    loginScreenContainer: {
        flex: 1,
    }, 
    avatar: {
        width:150,
        height:150,
        borderRadius:100,
        marginRight:5,
        marginTop: 180,
        borderWidth:2,
        borderColor: "white",
    },
    loginFormView: {
        flex: 1,
    },   
    topText: {
        fontSize: 20,
        paddingTop: 230,
        textAlign: 'center',
        color: 'white',
    },  
    loginFormInput: {
        height: 43,
        fontSize: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    registerText: {
        fontSize:25,
        height: 45,
        marginTop: 20,
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
        color: '#FF9A00',
        fontSize: 20,
        paddingBottom:10,
        paddingTop:10,
    },
    error: {
        ...Fonts.style.normal,
        textAlign: 'center',
        marginBottom: 5,
        color: 'red',  
    }, 

    //Modal
    closeButton: {
        paddingTop: 10,
        marginTop: 20,
        marginLeft: 5,
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
})