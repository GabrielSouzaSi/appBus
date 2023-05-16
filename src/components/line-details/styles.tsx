import { StyleSheet } from 'react-native';
import { GREY100, GREEN } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 3,
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 38,
    paddingTop: 26,
    borderBottomWidth: 1,
    borderBottomColor: GREY100,
    paddingBottom: 22,
  },
  title: {
    marginLeft: 34,
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  body: {
    paddingTop: 30,
    paddingHorizontal: 38,
  },
  otherLines: {
    fontFamily: 'Montserrat_700Bold',
    color: GREEN,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
