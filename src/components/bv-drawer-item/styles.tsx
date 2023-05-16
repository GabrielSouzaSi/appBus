import { StyleSheet } from 'react-native';
import { GREEN } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    marginBottom: 27,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    marginLeft: 15,
    fontSize: 18,
    color: GREEN,
    fontFamily: 'Montserrat_700Bold',
  },
  description: {
    fontSize: 12,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
