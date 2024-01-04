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
    margin: 10,
  },

  timeStyle: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
    color: 'black',
    backgroundColor : 'white',
    fontSize: 32,
    padding: 10,
    margin: 10,
  },
  scoreStyle: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor : 'white',
    color: 'black',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  questionView: {
    alignItems: 'center',
    padding: 10,
    paddingBottom : 50,
  },

  questionStyle: {
    textAlign: 'center',
    fontSize: 28,
    color: 'teal',
  },

  option1ViewStyle: {
    borderStyle: 'solid',
    borderWidth: 2,
    width: '50%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  option2ViewStyle: {
    borderStyle: 'solid',
    borderWidth: 2,
    width: '50%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
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

  secondTextStyle: {
    fontSize: 35,
    fontWeight: '600',
    borderWidth : 1,
    width : '50%',
    height : 150,
    borderColor : 'black',
    textAlign : 'center',
    textAlignVertical : 'center',
    backgroundColor :'white',
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
    backgroundColor : 'blue',
  },

  unCorrectButtonStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: '40%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'red',
  },

});
