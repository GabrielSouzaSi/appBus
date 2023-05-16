// COMPONENTS
import { View, KeyboardTypeOptions, Text } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import ErrorMessage from '../error-message';

// ICONS
import Calendar from './icons/calendar.svg';

// STYLES
import styles from './styles';

type MaskedInputProps = {
  placeholder: string;
  /**
   * Whether or not display calendar icon
   */
  useCalendarIcon?: boolean;
  /**
   * Overrides styles of container
   */
  containerStyle?: any;
  /**
   * Input type
   */
  keyboardType: KeyboardTypeOptions;
  /**
   * Value of input
   */
  value: string;
  /**
   * Callback function to be executed when value changes
   * Returns a masked value and a value without mask
   */
  onChange: (maskedValue: string, unMaskedValue: string) => void;
  /**
   * Mask to be used
   */
  mask: ReturnType<typeof Masks>;
  /**
   *  Error message
   */
  errorMessage?: string;
};

export default function MaskedInput({
  placeholder,
  containerStyle,
  keyboardType,
  value,
  onChange,
  mask,
  useCalendarIcon,
  errorMessage,
}: MaskedInputProps) {
  const renderInput = () => {
    if (errorMessage) return { ...styles.input, borderColor: 'red' };
    return styles.input;
  };

  function renderError() {
    if (errorMessage) return <ErrorMessage message={errorMessage} />;
    return <></>;
  }

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <MaskInput
        style={renderInput()}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderFillCharacter=" "
        mask={mask}
        onChangeText={onChange}
        value={value}
      />
      {useCalendarIcon && <Calendar style={styles.icon} />}

      {renderError()}
    </View>
  );
}
