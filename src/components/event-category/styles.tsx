import { StyleSheet } from 'react-native';
import { GREEN, WHITE } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    height: 136,
    width: 130,
    borderRadius: 10,
    backgroundColor: WHITE,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    color: GREEN,
    marginTop: 12,
  },
  icon: {
    width: 46,
    height: 46,
    fill: GREEN,
  },
});
