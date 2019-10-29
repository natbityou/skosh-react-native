import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    iconData:{
        height: 200,
        width: null,
    },
    title:{
        fontSize: 25,
        paddingTop: 10,
        paddingLeft: 10,
    },
    description:{
        fontSize: 20,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
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
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 20,
    },
    card:{
        paddingTop: 20,
        borderRadius:25,
        backgroundColor:"white",
        },
    photosCard:{
        marginTop: 10,
    },
    photo:{
        width: 80,
        height: 80,
        borderRadius:100,
        marginTop: 5,
        marginRight: 5,
    },
    upload:{
        fontSize: 18,
        paddingTop: 10,
    },
    uploadicon: {
        textAlign: 'center',
        paddingTop: 15,
    },
    uploadText: {
        textAlign: 'center',
    },
    scroll:{
        height: 175,
        width: null,
    },
   
    // // Profile Screen
    // cardImage:{
    //     flex: 1,
    //     height: 200,
    //     width: null,
    // },
    avatar:{
        height: 80,
        width: 80,
        borderRadius:100,
    },
    list:{
        paddingTop: 15,
        alignSelf: 'center',
        flexDirection: "row-reverse", 
    },

    // Upload Screen
    Button:{
        marginTop: 40,
    },
    submit: {
        textAlign: 'right',
        paddingRight: 30, 
    },
    uploadCaptionInput: {
        height:200,
        fontSize: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        marginTop: 40,
        lineHeight: 23,
        flex: 2,
    },
    skoshPhoto: {
        width: 350,
        height: 200,
        marginTop: 100,
        alignSelf: 'center',
    },
    placeholderPhoto: {
        height:300,
        width: 400,
    },
});   


