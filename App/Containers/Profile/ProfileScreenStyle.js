import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    avatar: {
        height: 100,
        width: 100,
        borderRadius:100,
        marginTop: 20,
        marginLeft: 40,
        marginBottom: 20,
    },
    username: {
        marginTop: 50,
        marginLeft: 40,
        fontSize: 25,
    },
    card: {
        overflow: 'hidden',
    },
    cardHeader: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#d3d3d3"
    },
    cardImage: {
        flex: 1,
        height: 200,
        width: 352,
        alignSelf: 'center',
        marginTop: 20,
    },
    dateContainer: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flex: 1,
    },
    date: {
        textAlign:'right',
        color: 'grey',
        fontSize: 15,
    },
    calendarIcon: {  
        marginRight: 10,
        color: '#3e64ff',
        paddingBottom: 10,
    },
    caption:{
        fontSize: 20,
    },
    headerData:{
        flexDirection: 'row',
    },
})