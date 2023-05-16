import { StyleSheet } from 'react-native';
import { WHITE, GREEN } from '../../styles/colors';
import defaultShadow from '../../styles/defaultShadow';

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 13,
    padding: 30,
    marginBottom: 20,
    ...defaultShadow,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Montserrat_600SemiBold',
  },
  hoursAction: {
    color: GREEN,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
});
