import { useRef } from 'react';

// COMPONENTS
import { TouchableOpacity, View, StyleProp } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DefaultText from '../default-text';
import ErrorMessage from '../error-message';

// STYLES
import styles from './styles';

type Item = {
  label: string;
  value: string;
};

type SelectInputProps = {
  label: string;
  options: Item[];
  containerStyle?: StyleProp<any>;
  onChange: (value: string) => void;
  value: string;
  errorMessage?: string;
};

type PickerType = {
  /**
   * Programmatically opens picker
   * https://github.com/react-native-picker/picker#focus-android-only-lib-version-1160
   */
  focus: Function;
} & any;

export default function SelectInput({
  label,
  options,
  containerStyle,
  onChange,
  value,
  errorMessage,
}: SelectInputProps) {
  const pickerRef = useRef<PickerType>(null);

  const open = () => {
    pickerRef?.current?.focus();
  };

  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      <TouchableOpacity onPress={open} style={styles.select}>
        <DefaultText>{label}</DefaultText>

        <View style={styles.divider} />

        <View>
          <Picker
            ref={pickerRef}
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            style={styles.picker}
          >
            {options.map((option, key) => (
              <Picker.Item
                label={option.label}
                value={option.value}
                key={key + 'item'}
              />
            ))}
          </Picker>
        </View>
      </TouchableOpacity>

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </View>
  );
}
