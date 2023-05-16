import { StyleSheet } from 'react-native';
import { GREEN, WHITE } from '../../styles/colors';
import defaultShadow from '../../styles/defaultShadow';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 10,
    paddingRight: 23,
    marginBottom: 15,
    // ...defaultShadow,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberBox: {
    backgroundColor: GREEN,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 66,
    height: 66,
  },
  numberText: {
    color: WHITE,
    fontFamily: 'Montserrat_600SemiBold',
  },
  optionLabel: {
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold',
    marginLeft: 26,
  },
});
