import { StyleSheet } from 'react-native';
import { WHITE, BLACK, GREEN } from '../../styles/colors';
import defaultShadow from '../../styles/defaultShadow';

export default StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 42,
    backgroundColor: WHITE,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    // ...defaultShadow,
  },
  formTitle: {
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 23,
  },
  emailInput: {
    marginBottom: 10,
  },
  forgotPassword: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    marginBottom: 20,
  },
  passwordInput: {
    marginBottom: 12,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    marginRight: 5,
  },
  registerRedirect: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 16,
    color: GREEN,
  },
});
