import { StyleSheet } from 'react-native';

import { GREY, GREEN, BLACK, WHITE } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREY,
    paddingTop: 25,
  },
  banner: {
    backgroundColor: BLACK,
    height: 225,
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 30,
  },
  bannerLegend: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 37,
    paddingVertical: 36,
  },
  title: {
    color: GREEN,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 28,
  },
  body: {
    paddingHorizontal: 37,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Montserrat_700Bold',
    marginLeft: 10,
    fontSize: 14,
  },
  seeMore: {
    color: GREEN,
    textDecorationLine: 'underline',
  },
  details: {
    width: '100%',
    marginTop: 24,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareAction: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GREEN,
  },
  shareActionLabel: {
    color: GREEN,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
});
