import create from 'zustand';

export type FirstForm = {
  name: string;
  document_number: string;
  dob: string;
  gender: string;
};

export type SecondForm = {
  phone_number: string;
  email: string;
  password: string;
  confirm_password: string;
};

type RegisterForm = {
  firstForm: FirstForm;
  secondForm: SecondForm;
  setFirstForm: (form: FirstForm) => void;
  setSecondForm: (form: SecondForm) => void;
};

export default create<RegisterForm>((set) => ({
  firstForm: {
    name: '',
    document_number: '',
    dob: '',
    gender: '',
  },
  secondForm: {
    phone_number: '',
    email: '',
    password: '',
    confirm_password: '',
  },
  setFirstForm: (form) => {
    set(() => ({ firstForm: form }));
  },
  setSecondForm: (form) => {
    set(() => ({ secondForm: form }));
  },
}));
