import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container:{
    marginTop: 20,
    padding: 10,
},
Text: {
    fontSize:30,

    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 15,
},
list: {
    backgroundColor:"white",
},
separator: {
    marginTop: 10,
},
/******** card **************/
card:{
paddingTop: 20,
borderRadius:25,
overflow: 'hidden',
backgroundColor:"white"
},
cardHeader: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
},
cardContent: {
    paddingVertical: 0,
    paddingHorizontal: 0,
},
cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 12.5,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
},
cardImage:{
    flex: 1,
    height: 175,
    width: null,
},
/******** card components **************/
title:{
    fontSize:20,
    flex:1,
    // fontFamily: Fonts.Roboto,
}, 
description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
    // fontFamily: Fonts.Roboto,
},
handicon:{
    marginRight: 10,
    color:"#f77754",
},
arrowicon:{
    marginLeft:20,
    color:"#f77754",
 
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
    alignSelf:'center',
    fontSize: 40,
    paddingTop: 40,
    paddingBottom: 40,
}
});   

