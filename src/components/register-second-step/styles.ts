import { StyleSheet } from 'react-native';
import { GREY200 } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36,
    paddingTop: 50,
  },
  input: {
    marginBottom: 10,
  },
  passwordInput: {
    marginBottom: 5,
  },
  confirmPasswordInput: {
    marginBottom: 30,
  },
  minimiumLength: {
    fontSize: 11,
    color: GREY200,
    marginBottom: 10,
  },
});
