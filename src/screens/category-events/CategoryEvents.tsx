// COMPONENTS
import { View, ScrollView } from 'react-native';
import Header from '../../components/header';
import DefaultText from '../../components/default-text';
import EventCard from '../../components/event-card';
import CategoryIcon from '../../components/category-icon/CategoryIcon';

// HELPERS
import dateInWords from '../../helpers/dateInWords';

// STYLES
import styles from './styles';

export default function CategoryEvents({ navigation, route }: any) {
  const { category } = route.params;

  const navigateTo = (screen: string, params: object) => () => {
    navigation.navigate(screen, params);
  };

  const renderEventList = () => {
    const { events } = category;

    return events.map((event: CityEvent) => (
      <View style={styles.row} key={`event-card-${event.id}}`}>
        <EventCard
          title={event.name}
          location={event.place}
          startDate={dateInWords(event.date)}
          price="Gratuito"
          size="large"
          margin={false}
          image={event.img}
          navigateTo={navigateTo('Event', { event })}
        />
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={category.name} useBorder={true} navigation={navigation}>
          <CategoryIcon category={category.id} styles={styles.icon} />
        </Header>

        <DefaultText style={styles.label}>Próximos eventos</DefaultText>

        {renderEventList()}
      </ScrollView>
    </View>
  );
}
