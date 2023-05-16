import { StyleSheet } from 'react-native';

import { GREY, GREEN, WHITE, BLACK } from '../../styles/colors';

export default StyleSheet.create({
  eventCard: {
    borderRadius: 10,
    width: 271,
    height: 146,
  },
  backgroundImage: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: BLACK,
  },
  tag: {
    backgroundColor: GREEN,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    color: WHITE,
  },
  name: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: GREEN,
    marginBottom: 12,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
