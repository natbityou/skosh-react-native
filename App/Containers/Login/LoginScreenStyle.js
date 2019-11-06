import { StyleSheet } from 'react-native'

export default StyleSheet.create({    
    backgroundImage: {
        width: '100%', 
        height: '100%',
        resizeMode: 'cover',
    },
    loginScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }, 
    logo: {
       width: 400,
       height: 400,
       alignSelf: 'center',
       marginLeft: 15,
       marginBottom: -100,
       marginTop: 100,
    },
    loginFormView: {
        flex: 1,
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
        marginBottom: 5,
    },
    loginText: {
        fontSize:25,
        height: 45,
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop:20,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    registerText: {
        fontSize: 20,
        color: "#FF9A00", 
        paddingLeft: 10,
    },
});