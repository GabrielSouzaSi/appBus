// COMPONENTS/
import { FlatList, View } from 'react-native';
import DefaultText from '../../components/default-text';
import EventCard from '../../components/event-card';
import Header from '../../components/header';
import EventCategory from '../../components/event-category';
import ContentLoader, { Rect } from 'react-content-loader/native';

// HOOKS
import useEvents from './hooks/useEvents';
import useCategories from './hooks/useCategories';

// HELPERS
import dateInWords from '../../helpers/dateInWords';

// STYLES
import styles from './styles';

type EventsProps = {
  navigation: any;
};

export default function Events({ navigation }: EventsProps) {
  const { eventList, isLoadingEvents } = useEvents();

  const { categoryList, isLoadingCategories } = useCategories();

  const navigateTo = (screen: string, params: object) => () => {
    navigation.navigate(screen, params);
  };

  const onRenderEvents = () => {
    if (isLoadingEvents)
      return (
        <View style={{ width: 233, height: 107 }}>
          <ContentLoader
            speed={2}
            width={271}
            height={146}
            viewBox="0 0 271 146"
            backgroundColor="#d4d1d1"
            foregroundColor="#e2dede"
          >
            <Rect x="4" y="-2" rx="20" ry="20" width="233" height="107" />
          </ContentLoader>
        </View>
      );

    return (
      <FlatList
        style={styles.lists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={eventList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <EventCard
            key={`event-${item.id}`}
            title={item.name}
            location={item.address}
            startDate={dateInWords(item.date)}
            price="Gratuito"
            image={item.img}
            navigateTo={navigateTo('Event', { event: item })}
          />
        )}
      />
    );
  };

  const onRenderFlatlist = () => {
    if (isLoadingCategories)
      return (
        <ContentLoader
          speed={2}
          width={300}
          height={146}
          viewBox="0 0 300 146"
          backgroundColor="#d4d1d1"
          foregroundColor="#e2dede"
        >
          <Rect x="4" y="-1" rx="20" ry="20" width="130" height="136" />
          <Rect x="138" y="0" rx="20" ry="20" width="130" height="136" />
          <Rect x="274" y="2" rx="20" ry="20" width="48" height="136" />
        </ContentLoader>
      );

    return (
      <FlatList
        style={styles.lists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <EventCategory
            key={`category-${index}`}
            name={item.name}
            type={item.id}
            onNavigate={navigateTo('CategoryEvents', { category: item })}
          />
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Eventos" useBorder={true} navigation={navigation} />

      <DefaultText style={styles.label}>Próximos eventos</DefaultText>

      {onRenderEvents()}

      <DefaultText style={styles.label}>Eventos por categoria</DefaultText>

      {onRenderFlatlist()}

      {/* <TouchableOpacity
        onPress={navigateTo('CategoryEvents')}
        style={styles.allEvents}
      >
        <DefaultText style={styles.allEventsLabel}>
          Mostre-me todos os eventos
        </DefaultText>
      </TouchableOpacity> */}
    </View>
  );
}
