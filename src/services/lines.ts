import api from '../config/api';

export const fetchLines = () => {
  return api('/api/lines');
};
