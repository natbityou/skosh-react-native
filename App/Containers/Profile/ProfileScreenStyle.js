import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    avatar:{
        height: 100,
        width: 100,
        borderRadius:100,
        marginTop: 20,
        marginLeft:55,
        marginBottom: 20,
    },
    
    list: {
        backgroundColor:"white",
    },

    card:{
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
        width: 352,
        alignSelf: 'center',
    },
    date:{
        textAlign:'right',
    },
    caption:{
        fontSize: 20,
    },
    headerData:{
        flexDirection: 'row',
    },
    username:{
        marginTop: 50,
        marginLeft: 40,
        fontSize: 25,
    },
})