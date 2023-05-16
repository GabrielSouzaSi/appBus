// COMPONENTS
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import DefaultText from '../default-text';

// STYLES
import styles from './styles';

type ActionButtonProps = {
  onPress: () => void;
  label: string;
  containerStyle?: object;
  isLoading?: boolean;
};

export default function ActionButton({
  onPress,
  label,
  containerStyle,
  isLoading,
}: ActionButtonProps) {
  function renderLoader() {
    if (isLoading) return <ActivityIndicator color="#FFF" />;
    return <DefaultText style={styles.submitButtonText}>{label}</DefaultText>;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.submitButton, ...containerStyle }}
    >
      {renderLoader()}
    </TouchableOpacity>
  );
}
