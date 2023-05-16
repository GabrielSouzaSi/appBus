type CityEvent = {
  id: number;
  name: string;
  description: string;
  img: string;
  place: string;
  address: string;
  date: string;
  starts_at: string;
  ends_at: string;
  category_id: number;
  created_at: string;
  updated_at: string;
  category: {
    id: number;
    name: string;
    description: string;
    color: string;
    created_at: string;
    updated_at: string;
  };
};
