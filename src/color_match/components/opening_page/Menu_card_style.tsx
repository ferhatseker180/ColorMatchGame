import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainViev : {
        flex: 1,
        alignItems: 'center',
        backgroundColor : 'black',
        justifyContent: 'center',
    },

    gameTitleView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    gameTitle : {
        fontSize: 40,
        fontWeight: '500',
        color: '#fff',
        padding : 10,
    },

    imageView : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 100,
    },

    imageStyle : {
        width:300,
        height:300,
        marginTop:20,
    },

   
    explainText : {
        borderWidth : 1,
        borderRadius : 10,
        borderBottomColor : 'yellow',
        borderTopColor : 'red',
        borderLeftColor : 'blue',
        borderRightColor : 'green',
        padding : 5,
        fontSize: 18,
        color: '#fff',
        marginTop : 120,
    },

    menuButtonView : {
        flex : 1,
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : 100,
        
    },

    howToPlayButton : {
        width: 150,
        height: 50,
        padding : 10,
        backgroundColor: 'brown',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd : 20,
    },

    playButton : {
        width: 150,
        height: 50,
        padding : 10,
        backgroundColor: 'brown',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
});