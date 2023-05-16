import { StyleSheet } from 'react-native';
import { GREEN } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 40,
    marginBottom: 34,
  },
  floatingLine: {
    width: 40,
    backgroundColor: GREEN,
    height: 5,
    marginBottom: 14,
  },
  firstLine: {
    fontSize: 30,
    fontFamily: 'Montserrat_700Bold',
  },
  secondLine: {
    fontSize: 30,
    fontFamily: 'Montserrat_700Bold',
    color: GREEN,
    marginBottom: 20,
  },
  description: {
    fontFamily: 'Montserrat_600SemiBold',
    maxWidth: 232,
  },
});
