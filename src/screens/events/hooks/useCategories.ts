import { useState, useEffect } from 'react';

// SERVICES
import { fetchCategories, Category } from '../../../services/categories';

export default function useCategories() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const onFetchCategories = async () => {
    try {
      setIsLoadingCategories(true);

      const { data } = await fetchCategories();

      setCategoryList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  useEffect(() => {
    onFetchCategories();
  }, []);

  return { categoryList, isLoadingCategories };
}
