import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listWrapper: {
    backgroundColor: '#42A8EB',
    width: '100%',
    height: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },

  pickerBorder: {
    borderColor: 'white',
    borderWidth: 1,
    width: 200,
    alignSelf: 'center',
  },

  picker: {
    color: 'white',
    width: 200,
    borderColor: 'white',
    height: 50,
  },

  buttonsWrapper: {
    padding: 10,
    position: 'absolute',
    bottom: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  buttonBack:{
    backgroundColor: '#d9534f',
    padding: 10,
    paddingLeft:40,
    paddingRight:40,
    borderRadius: 20,
  },

  buttonGo:{
    backgroundColor: '#5cb85c',
    padding: 10,
    paddingLeft:40,
    paddingRight:40,
    borderRadius: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
  }

});

export default styles;