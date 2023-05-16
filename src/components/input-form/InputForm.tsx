// COMPONENTS
import { TextInput, View, KeyboardTypeOptions } from 'react-native';
import ErrorMessage from '../error-message';

// ICONS
// import AcceptIcon from './icons/accept.svg';
import SearchIcon from './icons/search-icon.svg';

// STYLES
import styles from './styles';

type InputFormProps = {
  placeholder: string;
  /**
   * Overrides styles of container
   */
  containerStyle?: any;
  /**
   * If search flag is true a search icon is rendered
   */
  isSearch?: boolean;
  /**
   * Input type
   */
  keyboardType?: KeyboardTypeOptions;
  /**
   * Value of input
   */
  value?: string;
  /**
   * Tells TextInput to automatically capitalize certain characters.
   */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  /**
   * Callback function to be executed when value changes
   */
  onChange?: (value: string) => void;
  /**
   *  Error message
   */
  errorMessage?: string;
};

export default function InputForm({
  placeholder,
  containerStyle,
  isSearch,
  keyboardType,
  value,
  onChange,
  autoCapitalize,
  errorMessage,
}: InputFormProps) {
  const renderInput = () => {
    if (errorMessage) return { ...styles.input, borderColor: 'red' };
    return styles.input;
  };

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <TextInput
        style={renderInput()}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChange}
        autoCapitalize={autoCapitalize}
      />
      {isSearch && <SearchIcon style={styles.icon} />}

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </View>
  );
}
