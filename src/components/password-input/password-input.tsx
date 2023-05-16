import { useState } from 'react';

// COMPONENTS
import { TextInput, View, TouchableOpacity } from 'react-native';
import ErrorMessage from '../error-message';

// ICONS
import EyeIcon from './icons/eye.svg';

// STYLES
import styles from './styles';

type PasswordInputProps = {
  containerStyle?: any;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  errorMessage?: string;
};

export default function PasswordInput({
  containerStyle,
  placeholder,
  onChange,
  value,
  errorMessage,
}: PasswordInputProps) {
  const [isSecure, setIsSecure] = useState(true);

  function renderError() {
    if (errorMessage) return <ErrorMessage message={errorMessage} />;
    return <></>;
  }

  const renderInput = () => {
    if (errorMessage) return { ...styles.input, borderColor: 'red' };
    return styles.input;
  };

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <View>
        <TextInput
          style={renderInput()}
          placeholder={placeholder}
          secureTextEntry={isSecure}
          autoCapitalize="none"
          onChangeText={onChange}
          value={value}
        />

        <TouchableOpacity
          style={styles.icon}
          onPress={() => setIsSecure(!isSecure)}
        >
          <EyeIcon />
        </TouchableOpacity>
      </View>

      {renderError()}
    </View>
  );
}
