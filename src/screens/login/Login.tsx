import { useEffect, useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';

// SERVICES
import { login, LoginForm, register, update } from '../../services/auth';

// COMPONENTS
import { View, TouchableOpacity, ScrollView } from 'react-native';
import PresentationTitle from '../../components/presentation-title';
import DefaultText from '../../components/default-text';
import InputForm from '../../components/input-form';
import PasswordInput from '../../components/password-input';
import RBSheet from 'react-native-raw-bottom-sheet';
import RegisterFirstStep from '../../components/register-first-step';
import RegisterSecondStep from '../../components/register-second-step';
import RecoverPasswordModal from '../../components/recover-password-modal';
import CodeValidationModal from '../../components/code-validation-modal';
import ActionButton from '../../components/action-button';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

// STORES
import useRegisterStore, { FirstForm, SecondForm } from '../../stores/register';

// STYLES
import styles from './styles';
import slashToDashDate from '../../helpers/slashToDashDate';

enum Modals {
  REGISTER_FIRST_STEP,
  REGISTER_SECOND_STEP,
  RECOVER_PASSWORD,
  CODE_VALIDATION,
}

type LoginProps = {
  navigation: NativeStackNavigationProp<any, any>;
};

export default function Login({ navigation }: LoginProps) {
  const firstStepRef = useRef<RBSheet>(null);

  const secondStepRef = useRef<BottomSheetModal>(null);

  const recoverPasswordRef = useRef<RBSheet>(null);

  const codeValidationRef = useRef<RBSheet>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isRegistering, setIsRegistering] = useState(false);

  const setFirstForm = useRegisterStore((state) => state.setFirstForm);

  const firstForm = useRegisterStore((state) => state.firstForm);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      grant_type: 'password',
      client_id: 21,
      client_secret: 'R4431NRUbHdAj1P6tUvsi1FPg9TEyPuPZrcvdy3Y',
      username: '',
      password: '',
    },
  });

  const onSubmit = async (form: LoginForm) => {
    try {
      // const { data } = await api.post('/oauth/token', authForm);
      // const { access_token } = data;
      // await AsyncStorage.setItem('access_token', access_token);

      setIsSubmitting(true);

      const res = await login(form);

      console.log({ form, res });
    } catch (error: any) {
      console.error(error.response.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateTo = (screen: string) => () => {
    navigation.navigate(screen);
  };

  const onOpenModal = (modal: Modals) => {
    const onOpen = {
      [Modals.REGISTER_FIRST_STEP]: () => firstStepRef.current!.open(),
      [Modals.REGISTER_SECOND_STEP]: () => secondStepRef.current?.present(),
      [Modals.RECOVER_PASSWORD]: () => recoverPasswordRef.current!.open(),
      [Modals.CODE_VALIDATION]: () => codeValidationRef.current!.open(),
    };

    onOpen[modal]();
  };

  const onCloseModal = (modal: Modals) => {
    const onClose = {
      [Modals.REGISTER_FIRST_STEP]: () => firstStepRef.current!.close(),
      [Modals.REGISTER_SECOND_STEP]: () => secondStepRef.current!.close(),
      [Modals.RECOVER_PASSWORD]: () => recoverPasswordRef.current!.close(),
      [Modals.CODE_VALIDATION]: () => codeValidationRef.current!.close(),
    };

    onClose[modal]();
  };

  const onFinishFirstStep = (form: FirstForm) => {
    setFirstForm(form);
    onCloseModal(Modals.REGISTER_FIRST_STEP);
    onOpenModal(Modals.REGISTER_SECOND_STEP);
  };

  const onFinishSecondStep = async (form: SecondForm) => {
    try {
      setIsRegistering(true);

      const registerForm = {
        grant_type: 'password',
        client_id: 4,
        client_secret: 'sKrQEaNwbvQonv0g15ROvgRiGUYDpgJhoEBN51i8',
        name: firstForm.name,
        email: form.email,
        password: form.password,
      };

      const a = await register(registerForm);

      console.log(a);
      // AO SUBMETER O CADASTRO DEVE:
      // BLOQUEAR AÇÕES DO MODAL (FECHAR, ENVIAR NOVAMENTE, ALTERAR DADOS)
      // EXIBIR LOADERz
    } catch (error: any) {
      console.error(error.response.data);
    } finally {
      setIsRegistering(false);
    }
  };

  useEffect(() => {
    // onOpenModal(Modals.REGISTER_SECOND_STEP);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <PresentationTitle
        firstLine="O App do povo"
        secondLine="de Boa Vista"
        description="Aqui você consegue ver rotas de ônibus, horários e eventos na sua
        região."
      />

      <View style={styles.formContainer}>
        <DefaultText style={styles.formTitle}>Acesse o aplicativo</DefaultText>

        <Controller
          name="username"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputForm
              placeholder="Digite seu e-mail"
              containerStyle={styles.emailInput}
              onChange={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              placeholder="Digite sua senha"
              containerStyle={styles.passwordInput}
              onChange={onChange}
              value={value}
            />
          )}
        />

        <TouchableOpacity onPress={() => onOpenModal(Modals.RECOVER_PASSWORD)}>
          <DefaultText style={styles.forgotPassword}>
            Esqueci minha senha
          </DefaultText>
        </TouchableOpacity>

        <ActionButton onPress={handleSubmit(onSubmit)} label="Fazer login" />

        <View style={styles.registerContainer}>
          <DefaultText style={styles.registerText}>
            Ainda não tem conta?
          </DefaultText>

          <TouchableOpacity
            onPress={() => onOpenModal(Modals.REGISTER_FIRST_STEP)}
          >
            <DefaultText style={styles.registerRedirect}>
              Cadastre-se
            </DefaultText>
          </TouchableOpacity>
        </View>
      </View>

      <RegisterFirstStep
        firstStepRef={firstStepRef}
        onNextStep={onFinishFirstStep}
        onClose={() => onCloseModal(Modals.REGISTER_FIRST_STEP)}
      />

      <RegisterSecondStep
        secondStepRef={secondStepRef}
        onClose={() => onCloseModal(Modals.REGISTER_SECOND_STEP)}
        onFinish={onFinishSecondStep}
        isSubmitting={isRegistering}
      />

      <RecoverPasswordModal
        recoverPasswordRef={recoverPasswordRef}
        onNext={() => {
          onOpenModal(Modals.CODE_VALIDATION);
          onCloseModal(Modals.RECOVER_PASSWORD);
        }}
        onClose={() => onCloseModal(Modals.RECOVER_PASSWORD)}
      />

      <CodeValidationModal
        codeValidationRef={codeValidationRef}
        onClose={() => onCloseModal(Modals.CODE_VALIDATION)}
      />
    </ScrollView>
  );
}
