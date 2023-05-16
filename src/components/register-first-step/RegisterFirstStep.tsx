import { useForm, Controller } from 'react-hook-form';
import { isValid as isDateValid } from 'date-fns';

// HELPERS
import slashToDashDate from '../../helpers/slashToDashDate';

// STORE
import { FirstForm } from '../../stores/register';

// COMPONENTS
import { Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { Masks } from 'react-native-mask-input';
import RBSheet from 'react-native-raw-bottom-sheet';
import PresentationTitle from '../presentation-title';
import InputForm from '../input-form';
import MaskedInput from '../masked-input';
import SelectInput from '../select-input';
import FormActions from '../form-actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// STYLES
import styles from './styles';
import { GREY, BLACK } from '../../styles/colors';

type FirstStepProps = {
  firstStepRef: any;
  onNextStep: (form: FirstForm) => void;
  onClose: () => void;
};

export default function RegisterFirstStep({
  firstStepRef,
  onNextStep,
  onClose,
}: FirstStepProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: 'Uriel Carneiro',
      document_number: '01680409212',
      dob: '14/11/1995',
      gender: 'masculino',
    },
  });

  const { height } = Dimensions.get('window');

  const RB_HEIGHT = height - 55;

  const customStyles = {
    wrapper: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
      borderRadius: 15,
      backgroundColor: GREY,
    },
    draggableIcon: {
      backgroundColor: BLACK,
    },
  };

  function isValidCpf(cpf: string) {
    cpf = cpf.replace(/[\s.-]*/gim, '');

    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  function validateDob(dob: string) {
    const formattedDate = slashToDashDate(dob);
    return isDateValid(new Date(formattedDate));
  }

  const rules = {
    name: {
      required: 'Nome é obrigatório',
    },
    document_number: {
      required: 'CPF é obrigatório',
      validate: (value: string) => isValidCpf(value),
    },
    dob: {
      required: 'Data de nascimento é obrigatório',
      validate: (value: string) => validateDob(value) || 'Data inválida',
    },
    gender: {
      required: 'Gênero é obrigatório',
    },
  };

  return (
    <RBSheet
      ref={firstStepRef}
      height={RB_HEIGHT}
      closeOnDragDown={true}
      customStyles={customStyles}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <KeyboardAwareScrollView>
            <PresentationTitle
              firstLine="Faça seu cadastro"
              secondLine=""
              description="Preencha os dados abaixo:"
              isRegister
            />
            <Controller
              name="name"
              control={control}
              rules={rules.name}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  placeholder="Nome completo"
                  containerStyle={styles.input}
                  onChange={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              name="document_number"
              control={control}
              rules={rules.document_number}
              render={({ field: { onChange, value } }) => (
                <MaskedInput
                  placeholder="CPF"
                  containerStyle={styles.input}
                  keyboardType="numeric"
                  mask={Masks.BRL_CPF}
                  onChange={onChange}
                  value={value}
                  errorMessage={errors.document_number?.message}
                />
              )}
            />

            <Controller
              name="dob"
              control={control}
              rules={rules.dob}
              render={({ field: { onChange, value } }) => (
                <MaskedInput
                  placeholder="Data de nascimento"
                  containerStyle={styles.input}
                  keyboardType="numeric"
                  mask={Masks.DATE_DDMMYYYY}
                  onChange={onChange}
                  value={value}
                  useCalendarIcon
                  errorMessage={errors.dob?.message}
                />
              )}
            />

            <Controller
              name="gender"
              control={control}
              rules={rules.gender}
              render={({ field: { onChange, value } }) => (
                <SelectInput
                  label="Gênero"
                  errorMessage={errors.gender?.message}
                  options={[
                    { label: 'Selecione', value: '' },
                    { label: 'Masculino', value: 'masculino' },
                    { label: 'Feminino', value: 'feminino' },
                  ]}
                  containerStyle={{ marginBottom: 32 }}
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <FormActions
              submitText="Continuar"
              submitAction={handleSubmit(onNextStep)}
              closeAction={onClose}
            />
          </KeyboardAwareScrollView>
        </ScrollView>
      </SafeAreaView>
    </RBSheet>
  );
}
