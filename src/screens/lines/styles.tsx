import { StyleSheet } from 'react-native';
import { GREEN, GREY } from '../../styles/colors';
import defaultShadow from '../../styles/defaultShadow';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 37,
    paddingVertical: 36,
    position: 'relative',
    flex: 1,
    backgroundColor: GREY,
  },
  inputSearch: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 25,
    ...defaultShadow,
  },
  linesLabel: {
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 25,
  },
});
