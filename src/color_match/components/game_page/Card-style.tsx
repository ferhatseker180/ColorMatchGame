import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
  },

  secondView: {
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },

  scoreStyle: {
    borderWidth: 1,
    borderRadius : 25,
    borderColor : '#e0e0e0',
    backgroundColor : 'steelblue',
    color: 'white',
    fontSize: 42,
    marginTop : 8,
    marginBottom : 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  circleTimerStyle : {
    margin : 10,
  },

  questionView: {
    alignItems: 'center',
    backgroundColor:'#e0e0e0',
    marginTop : 30,
    marginBottom : 30,
  },

  questionStyle: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight:'400',
  },

 
  firstTextStyle: {
    fontSize: 35,
    fontWeight: '600',
    borderWidth : 1,
    borderRadius : 20,
    width : '50%',
    height : 150,
    borderColor : 'grey',
    textAlign : 'center',
    textAlignVertical : 'center',
    backgroundColor :'white',
    color : 'black',
    marginEnd : 20,
  },


  correctButtonStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: '40%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    color : 'white',
    marginEnd : 10,
    marginBottom : 10,
    marginTop : 40,
    backgroundColor : 'blue',
  },

  unCorrectButtonStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: '40%',
    height: 60,
    marginBottom : 10,
    marginTop : 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'red',
  },

});
