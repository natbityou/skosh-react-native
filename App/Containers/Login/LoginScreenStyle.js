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
    logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 250,
    marginBottom: 30,
    textAlign: 'center',    
    color: 'white',
    },
    loginFormView: {
        flex: 1
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
    loginText: {
        fontSize:20,
        height: 45,
        marginTop: 30,
        color:"white",
        textAlign: 'center',
        },

    registerText: {
        fontSize:20,
        color:"white",
        textAlign: 'center',
        },
    error: {
        ...Fonts.style.normal,
        textAlign: 'center',
        marginBottom: 5,
        color: 'red',  
    }, 
})