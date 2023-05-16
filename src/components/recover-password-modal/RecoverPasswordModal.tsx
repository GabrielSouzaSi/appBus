// COMPONENTS
import RBSheet from 'react-native-raw-bottom-sheet';
import DefaultText from '../default-text';
import InputForm from '../input-form';
import FormActions from '../form-actions';

// STYLES
import { GREY, BLACK } from '../../styles/colors';
import styles from './styles';

type RecoverPasswordProps = {
  recoverPasswordRef: any;
  onNext: () => void;
  onClose: () => void;
};

export default function RecoverPasswordModal({
  recoverPasswordRef,
  onNext,
  onClose,
}: RecoverPasswordProps) {
  const customStyles = {
    wrapper: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
      borderRadius: 15,
      backgroundColor: GREY,
      paddingHorizontal: 36,
      flex: 1,
    },
    draggableIcon: {
      backgroundColor: BLACK,
    },
  };

  return (
    <RBSheet
      ref={recoverPasswordRef}
      closeOnDragDown={true}
      customStyles={customStyles}
    >
      <DefaultText style={styles.title}>
        Informe o e-mail cadastrado
      </DefaultText>

      <InputForm
        placeholder="Digite seu e-mail"
        isValid={true}
        containerStyle={styles.input}
      />

      <FormActions
        submitText="Enviar"
        submitAction={onNext}
        closeAction={onClose}
      />
    </RBSheet>
  );
}
