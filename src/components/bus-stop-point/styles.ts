import { StyleSheet } from 'react-native';
import { GREEN, GREEN100 } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    backgroundColor: GREEN100,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: GREEN,
    borderWidth: 5,
  },
  ring: {
    width: 30,
    height: 30,
    borderColor: GREEN,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
