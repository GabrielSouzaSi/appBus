import api from '../config/api';

export type LoginForm = {
  grant_type: string;
  client_id: number;
  client_secret: string;
  username: string;
  password: string;
};

export type RegisterForm = {
  grant_type: string;
  client_id: number;
  client_secret: string;
  name: string;
  email: string;
  password: string;
};

export type UpdateForm = {
  form: {
    document_number: string;
    gender: string;
    dob: string;
    phone_number: string;
  };
  bearerToken: string;
};

export const login = (form: LoginForm) => {
  return api.post('/oauth/token', form);
};

export const register = (form: RegisterForm) => {
  console.log(form);
  return api.post('/api/auth/register', form);
};

export const update = ({ form, bearerToken }: UpdateForm) => {
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  };

  return api.put('/api/user/user_data', form, CONFIG);
};
