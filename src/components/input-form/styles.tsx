import { StyleSheet } from 'react-native';
import { GREY100 } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    borderRadius: 10,
    borderColor: GREY100,
    borderWidth: 1,
    padding: 20,
    paddingRight: 40,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: '45%',
  },
});
