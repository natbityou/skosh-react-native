import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        paddingTop: 30,
    },
    backgroundImage: {
        width: '100%', 
        height: '100%',
        resizeMode: 'cover',
    },
    Text: {
        paddingTop: 5,
        paddingBottom: 15,
        fontSize: 30,
        color: 'white',
        textAlign: "left",
    },
    separator: {
        marginTop: 30,
    },

    /******** card **************/
    card:{
        overflow: 'hidden',
    },
    cardHeader: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
    },
    cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 12.5,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#d3d3d3"
    },
    cardImage:{
        height: 175,
        width: 360,
        alignSelf: 'center',
    },

    /******** card components **************/
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        paddingTop: 10,
    }, 
    Text: {
        fontSize: 30,
        textAlign: "left",
        paddingTop: 5,
        paddingBottom: 15,
        color: 'black',
    },
    description:{
        fontSize: 20,
        color: 'grey',
        marginTop:5,
        marginBottom:5,
    },
    handicon:{
        marginRight: 10,
        color: '#3e64ff',
    },
    arrowicon:{
        marginLeft: 20,
        color: '#3e64ff',
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarLabel: {
        marginLeft: 2,
        paddingBottom: 4,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        fontSize: 18,
    },
    socialBarButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButton: {
        fontSize: 20,
        height: 45,
        marginTop: 40,
        color: '#fb9224',
        textAlign: 'center',
    },
});   

