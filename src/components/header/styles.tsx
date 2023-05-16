import { StyleSheet } from 'react-native';

import { GREEN, GREY100, GREY300, WHITE } from '../../styles/colors';

export const WHITE_COLOR = WHITE;

export const GREEN_COLOR = GREEN;

export const GREY300_COLOR = GREY300;

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },
  headerBorder: {
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: GREY100,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 26,
    color: GREEN,
    marginLeft: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontFamily: 'Montserrat_700Bold',
    marginLeft: 14,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
