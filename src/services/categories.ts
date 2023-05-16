import api from '../config/api';

// TYPES
import CategoryTypes from '../@types/categories-types';

export type Category = {
  id: CategoryTypes;
  name: string;
  description: string;
  color: string;
  created_at: string;
  updated_at: string;
  events: CityEvent[];
};

export const fetchCategories = () => {
  return api('/api/categories');
};
