import { StyleSheet } from 'react-native';
import { GREY100, GREY200 } from '../../styles/colors';

export default StyleSheet.create({
  container: {},
  select: {
    borderRadius: 10,
    borderColor: GREY100,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 40,
    width: 1,
    backgroundColor: GREY100,
  },
  picker: {
    color: GREY200,
    width: 170,
    height: 18,
  },
});
