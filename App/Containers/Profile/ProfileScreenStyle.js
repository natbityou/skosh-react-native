import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    avatar:{
        height: 100,
        width: 100,
        borderRadius:100,
        marginTop: 20,
        marginLeft:20,
    },
    
    list: {
        backgroundColor:"white",
    },

    card:{
        paddingTop: 20,
        borderRadius:25,
        overflow: 'hidden',
        backgroundColor:"white"
        },

    cardHeader:{
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
    },
    cardImage:{
        flex: 1,
        height: 200,
        width: null,
    },
    date:{
        textAlign:'right',
    },
    caption:{
        fontSize: 20,
    },
})