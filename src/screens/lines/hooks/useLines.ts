import { useState, useEffect } from 'react';

// SERVICES
import { fetchLines } from '../../../services/lines';

export default function useLines() {
  const [linesList, setLinesList] = useState<any[]>([]);

  const [isLoadingLines, setIsLoadingLines] = useState(false);

  const onFetchCategories = async () => {
    try {
      setIsLoadingLines(true);

      const { data } = await fetchLines();

      setLinesList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingLines(false);
    }
  };

  const onSearchLine = (nameOrId: string) => {
    if (nameOrId.length === 0) {
      onFetchCategories();
    } else {
      const filteredLines = linesList.filter((line) => {
        const lineNumber = String(line.number);

        return (
          lineNumber.includes(nameOrId) || line.description.includes(nameOrId)
        );
      });

      setLinesList(filteredLines);
    }
  };

  useEffect(() => {
    onFetchCategories();
  }, []);

  return { linesList, isLoadingLines, onSearchLine };
}
