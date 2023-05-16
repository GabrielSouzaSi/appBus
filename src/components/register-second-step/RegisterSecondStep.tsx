import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';

// COMPONENTS
import { View, ActivityIndicator } from 'react-native';
import { Masks } from 'react-native-mask-input';
import PresentationTitle from '../presentation-title';
import MaskedInput from '../masked-input';
import InputForm from '../input-form';
import PasswordInput from '../password-input';
import DefaultText from '../default-text';
import FormActions from '../form-actions';
import BottomModal from '../bottom-modal';

// STYLES
import styles from './styles';

type SecondStepProps = {
  isSubmitting: boolean;
  secondStepRef: any;
  onClose: () => void;
  onFinish: (form: any) => void;
};

export default function RegisterSecondStep({
  isSubmitting,
  secondStepRef,
  onClose,
  onFinish,
}: SecondStepProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone_number: '95984001300',
      email: 'uriel12@mail.com',
      password: '12345678',
      password_confirm: '12345678',
    },
  });

  const watchPassword = useRef({});

  watchPassword.current = watch('password');

  const rules = {
    phone_number: {
      required: 'O campo de Número de celular é obrigatório',
    },
    email: {
      required: 'O campo de E-mail é obrigatório',
      validate: (value: string) =>
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
          value
        ) || 'E-mail inválido',
    },
    password: {
      required: 'O campo de Senha é obrigatório',
      validate: (value: string) => value.length >= 8 || 'Senha muito pequena',
    },
    password_confirm: {
      required: 'O campo de Confirmação de Senha é obrigatório',
      validate: (value: string) =>
        watchPassword.current === value || 'Senhas não são iguais',
    },
  };
  return (
    <BottomModal modalRef={secondStepRef}>
      <View style={styles.container}>
        <PresentationTitle
          firstLine="Agora falta pouco"
          secondLine=""
          description="Preencha abaixo e conclua."
          isRegister
        />

        <Controller
          name="phone_number"
          control={control}
          rules={rules.phone_number}
          render={({ field: { onChange, value } }) => (
            <MaskedInput
              placeholder="Digite seu número de celular"
              containerStyle={styles.input}
              keyboardType="numeric"
              mask={Masks.BRL_PHONE}
              onChange={onChange}
              value={value}
              errorMessage={errors.phone_number?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={rules.email}
          render={({ field: { onChange, value } }) => (
            <InputForm
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
              containerStyle={styles.input}
              onChange={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={rules.password}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              placeholder="Digite sua senha"
              containerStyle={styles.passwordInput}
              onChange={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <DefaultText style={styles.minimiumLength}>
          No mínimo 8 dígitos
        </DefaultText>

        <Controller
          name="password_confirm"
          control={control}
          rules={rules.password_confirm}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              placeholder="Confirme sua senha"
              containerStyle={styles.confirmPasswordInput}
              onChange={onChange}
              value={value}
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />

        <FormActions
          submitText="Concluir cadastro"
          submitAction={handleSubmit(onFinish)}
          closeAction={onClose}
          isLoading={isSubmitting}
        />
      </View>
    </BottomModal>
  );
}
