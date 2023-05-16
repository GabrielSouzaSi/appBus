import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../config/api';

// COMPONENTS
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import DefaultText from '../../components/default-text';
import Header from '../../components/header';
import ActionButton from '../../components/action-button';

// HELPERS
import dateInWords from '../../helpers/dateInWords';

// STYLES
import styles from './styles';

// ICONS
import GeoPoint from './icons/gps.svg';
import Calendar from './icons/calendar.svg';
import Clock from './icons/clock.svg';
import Category from './icons/category.svg';
import Ticket from './icons/ticket.svg';

export default function Event({ navigation, route }: any) {
  const SHORT_DESCRIPTION_LENGTH = 75;

  const [showMore, setShowMore] = useState(true);

  const [description, setDescription] = useState('');

  const { event } = route.params;

  const cityEvent: CityEvent = event;

  function renderHours(time: string) {
    const splitedTime = time.split(':');
    const hours = splitedTime[0];
    const minutes = splitedTime[1];

    if (minutes === '00') return hours;
    return `${hours}:${minutes}`;
  }

  const onSeeMore = () => {
    setDescription(cityEvent.description);
    setShowMore(false);
  };

  useEffect(() => {
    if (cityEvent.description.length > SHORT_DESCRIPTION_LENGTH) {
      const shortDescription =
        cityEvent.description.slice(0, SHORT_DESCRIPTION_LENGTH) + '...';
      setDescription(shortDescription);
    } else {
      onSeeMore();
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.banner}
        source={{
          uri: `${BASE_URL}${cityEvent.img}`,
        }}
        imageStyle={{
          opacity: 0.4,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      >
        <View style={styles.bannerLegend}>
          <Header navigation={navigation} useWhite={true} />
          <DefaultText style={styles.title}>{cityEvent.name}</DefaultText>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <View style={styles.locationContainer}>
          <GeoPoint />
          <DefaultText style={styles.label}>{cityEvent.place}</DefaultText>
        </View>

        <DefaultText>{description}</DefaultText>

        {showMore && (
          <TouchableOpacity onPress={onSeeMore}>
            <DefaultText style={styles.seeMore}>Ver mais</DefaultText>
          </TouchableOpacity>
        )}

        <View style={styles.details}>
          <View style={{ ...styles.detailsRow, marginBottom: 12 }}>
            <View style={styles.detailItem}>
              <Ticket />
              <DefaultText style={styles.label}>Evento Gratuito</DefaultText>
            </View>

            {cityEvent?.category?.name && (
              <View style={styles.detailItem}>
                <Category />
                <DefaultText style={styles.label}>
                  {cityEvent?.category?.name}
                </DefaultText>
              </View>
            )}
          </View>

          <View style={{ ...styles.detailsRow, marginBottom: 22 }}>
            <View style={styles.detailItem}>
              <Calendar />
              <DefaultText style={styles.label}>
                {dateInWords(cityEvent.date)}
              </DefaultText>
            </View>

            <View style={styles.detailItem}>
              <Clock />
              <DefaultText style={styles.label}>
                Às {renderHours(cityEvent.starts_at)} horas
              </DefaultText>
            </View>
          </View>
        </View>

        {/* <ActionButton label="Add evento a minha agenda" onPress={() => {}} /> */}

        {/* <TouchableOpacity style={styles.shareAction}>
          <DefaultText style={styles.shareActionLabel}>
            Compartilhar evento
          </DefaultText>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
