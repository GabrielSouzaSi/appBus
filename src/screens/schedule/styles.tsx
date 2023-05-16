import { StyleSheet } from 'react-native';
import {
  GREEN,
  GREY,
  GREY100,
  GREY200,
  GREY300,
  WHITE,
} from '../../styles/colors';
import defaultShadow from '../../styles/defaultShadow';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 37,
    paddingVertical: 36,
    position: 'relative',
    flex: 1,
    backgroundColor: GREY,
  },
  body: {
    flex: 1,
  },
  route: {
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: GREY100,
    paddingVertical: 26,
    marginBottom: 26,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dayButton: {
    borderWidth: 1,
    borderColor: GREY300,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  dayButtonSelected: {
    backgroundColor: GREEN,
    borderWidth: 0,
  },
  dayLabel: {
    fontSize: 14,
    color: GREY200,
    fontFamily: 'Montserrat_600SemiBold',
  },
  dayLabelSelected: {
    color: WHITE,
  },
  phasesDay: {
    borderBottomColor: GREY100,
    borderBottomWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 3,
    marginBottom: 32,
  },
  phasesDaySelected: {
    borderBottomColor: GREEN,
  },
  phasesDayLabel: {
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
  },
  hoursGroup: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  hoursList: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  hoursRange: {
    marginBottom: 18,
    color: GREY100,
  },
  hoursRangeSelected: {
    color: GREY200,
  },
  seeOnMap: {
    ...defaultShadow,
  },
  seeOnMapLabel: {
    fontFamily: 'Montserrat_700Bold',
    color: WHITE,
    textAlign: 'center',
  },
});
