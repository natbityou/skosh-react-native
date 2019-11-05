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
    logoContainer: {
        flex: 1,
        alignContent:'center',
        justifyContent: 'center'
    },
    logo: {
       marginTop: 200,
       marginLeft: 15,
       width: 350,
       height: 350,
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
        flex: 1,
        marginTop: 0,
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