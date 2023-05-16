// COMPONENTS
import { View, TouchableOpacity } from 'react-native';
import DefaultText from '../default-text';
import ActionButton from '../action-button';

// STYLES
import styles from './styles';

type FormActionsType = {
  isLoading?: boolean;
  submitText: string;
  submitAction: () => void;
  closeAction: () => void;
};

/**
 * Displays default action buttons for forms
 */
export default function FormActions({
  submitAction,
  closeAction,
  submitText,
  isLoading,
}: FormActionsType) {
  return (
    <>
      <ActionButton
        onPress={submitAction}
        label={submitText}
        isLoading={isLoading}
      />

      <View style={styles.closeAction}>
        <TouchableOpacity onPress={closeAction}>
          <DefaultText style={styles.closeLabel}>Fechar</DefaultText>
        </TouchableOpacity>
      </View>
    </>
  );
}
