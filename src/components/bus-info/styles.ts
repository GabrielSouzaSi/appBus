import { StyleSheet } from 'react-native';
import { GREEN, GREY, GREY100, GREY200, WHITE } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: GREEN,
    width: 314,
    padding: 18,
    borderRadius: 10,
    flexDirection: 'row',
  },
  mediumText: {
    fontFamily: 'Montserrat_500Medium',
    color: WHITE,
    fontSize: 14,
  },
  smallText: {
    fontFamily: 'Montserrat_500Medium',
    color: WHITE,
    fontSize: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  address: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: WHITE,
    marginBottom: 4,
  },
  left: {
    flex: 1,
  },
  close: {
    justifyContent: 'center',
  },
});
