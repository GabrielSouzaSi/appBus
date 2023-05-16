import { StyleSheet } from 'react-native';

import { GREY, GREEN } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 37,
    paddingTop: 36,
    position: 'relative',
    flex: 1,
    backgroundColor: GREY,
  },
  label: {
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 26,
  },
  row: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    fill: GREEN,
  },
});
