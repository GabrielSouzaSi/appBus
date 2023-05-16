import { StyleSheet } from 'react-native';

import { GREY, GREEN } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 37,
    paddingVertical: 36,
    position: 'relative',
    flex: 1,
    backgroundColor: GREY,
  },
  label: {
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 26,
  },
  allEvents: {
    alignSelf: 'center',
    width: 300,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GREEN,
  },
  allEventsLabel: {
    fontFamily: 'Montserrat_700Bold',
    color: GREEN,
    textAlign: 'center',
  },
  lists: {
    flexGrow: 0,
    marginBottom: 26,
  },
});
