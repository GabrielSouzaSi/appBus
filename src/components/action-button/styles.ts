import { StyleSheet } from 'react-native';
import { GREEN, WHITE } from '../../styles/colors';

export default StyleSheet.create({
  submitButton: {
    width: '100%',
    backgroundColor: GREEN,
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 22,
  },
  submitButtonText: {
    fontFamily: 'Montserrat_600SemiBold',
    color: WHITE,
    textAlign: 'center',
  },
});
