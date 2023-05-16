import api from '../config/api';

export const fetchEvents = () => {
  return api('/api/events');
};
