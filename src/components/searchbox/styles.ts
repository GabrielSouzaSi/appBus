import { StyleSheet } from 'react-native';
import { GREY300, WHITE } from '../../styles/colors';
import defaultShadow from '../../styles/defaultShadow';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 48,
    width: '100%',
    paddingHorizontal: 37,
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  menu: {
    paddingHorizontal: 25,
    paddingVertical: 22,
    backgroundColor: WHITE,
    borderRadius: 10,
    justifyContent: 'center',
    ...defaultShadow,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: WHITE,
    borderRadius: 10,
    marginLeft: 12,
    paddingRight: 22,
    ...defaultShadow,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 22,
    paddingVertical: 22,
    color: GREY300,
    fontFamily: 'Montserrat_600SemiBold',
  },
  resultsList: {
    marginLeft: 81,
    backgroundColor: WHITE,
    borderRadius: 10,
    marginTop: 10,
    padding: 22,
    overflow: 'hidden',
    ...defaultShadow,
  },
  resultsListItem: {
    marginBottom: 14,
  },
});
