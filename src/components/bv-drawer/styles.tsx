import { StyleSheet } from 'react-native';
import { GREEN, GREY, GREY100, GREY200, WHITE } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 38,
    backgroundColor: GREY,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  closeButton: {
    padding: 25,
    backgroundColor: WHITE,
    marginRight: 25,
  },
  closeButtonText: {
    color: GREEN,
    fontFamily: 'Montserrat_700Bold',
  },
  headerTitle: {
    color: GREEN,
    fontSize: 26,
    fontFamily: 'Montserrat_700Bold',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: GREY100,
    marginVertical: 30,
  },
});
