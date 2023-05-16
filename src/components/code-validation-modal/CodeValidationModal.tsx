// COMPONENTS
import RBSheet from 'react-native-raw-bottom-sheet';
import DefaultText from '../default-text';
import InputForm from '../input-form';
import FormActions from '../form-actions';
import PasswordInput from '../password-input';

// STYLES
import { GREY, BLACK } from '../../styles/colors';
import styles from './styles';
import { View } from 'react-native';

type CodeValidationProps = {
  codeValidationRef: any;
  onClose: () => void;
};

export default function CodeValidationModal({
  codeValidationRef,
  onClose,
}: CodeValidationProps) {
  const customStyles = {
    wrapper: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
      borderRadius: 15,
      backgroundColor: GREY,
      paddingHorizontal: 36,
    },
    draggableIcon: {
      backgroundColor: BLACK,
    },
  };

  return (
    <RBSheet
      height={430}
      ref={codeValidationRef}
      closeOnDragDown={true}
      customStyles={customStyles}
    >
      <View>
        <DefaultText style={styles.title}>
          Informe o código enviado para o seu e-mail
        </DefaultText>

        <InputForm
          placeholder="Código de validação"
          isValid={true}
          containerStyle={styles.input}
        />

        <PasswordInput placeholder="Nova senha" containerStyle={styles.input} />

        <FormActions
          submitText="Enviar"
          submitAction={() => {}}
          closeAction={onClose}
        />
      </View>
    </RBSheet>
  );
}
