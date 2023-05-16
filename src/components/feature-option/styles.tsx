import { StyleSheet } from 'react-native';
import { GREEN, WHITE } from '../../styles/colors';
import defaultShadow from '../../styles/defaultShadow';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 13,
    paddingVertical: 27,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 16,
    ...defaultShadow,
  },
  icon: {
    marginRight: 15,
  },
  flex1: {
    flex: 1,
  },
  title: {
    color: GREEN,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20,
  },
  description: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 12,
    flexWrap: 'wrap',
  },
});
