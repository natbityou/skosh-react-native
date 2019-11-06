import { StyleSheet } from 'react-native';
import { genericTypeAnnotation } from '@babel/types';

export default StyleSheet.create({
  
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'flex-start',
        paddingTop: 10,
        paddingLeft:15,
    }, 
    description:{
        fontSize: 20,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        color: 'grey',
    },
    scroll:{
        height: 300,
        width: null,
    },
    avatar:{
        height: 85,
        width: 85,
        borderRadius:100,
        margin: 3,
        borderWidth: 1,
        borderColor:'grey',
    },
    list:{
        alignSelf: 'center',
    },
    upload:{
        fontSize: 18,
        paddingTop: 15,
    },
    uploadicon: {
        textAlign: 'center',
        paddingTop: 15,
        color: '#3e64ff',
    },
    uploadText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#3e64ff',
    },
    cardTitle:{
        fontSize: 20,
        textAlign: 'left',
        paddingTop: 30,
        paddingBottom: 20,
        paddingLeft:10

    },
});   


    