import { useState, useEffect } from 'react';

// SERVICES
import { Event, fetchEvents } from '../../../services/events';

export default function useEvents() {
  const [eventList, setEventList] = useState<Event[]>([]);

  const [isLoadingEvents, setIsLoadingEvents] = useState(false);

  const onFetchEvents = async () => {
    try {
      setIsLoadingEvents(true);

      const { data } = await fetchEvents();

      setEventList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingEvents(false);
    }
  };

  useEffect(() => {
    onFetchEvents();
  }, []);

  return { eventList, isLoadingEvents };
}
