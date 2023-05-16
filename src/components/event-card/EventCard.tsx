import { BASE_URL } from '../../config/api';

// COMPONENTS
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import DefaultText from '../default-text';

// ICONS
import Calendar from './icons/calendar.svg';
import Pin from './icons/pin.svg';

// STYLES
import styles from './styles';

enum SizeTypes {
  NORMAL = 'normal',
  LARGE = 'large',
}

type EventCardProps = {
  title: string;
  location: string;
  startDate: string;
  endDate?: string;
  price: string;
  size?: 'normal' | 'large';
  margin?: boolean;
  image: string;
  navigateTo: () => void;
};

export default function EventCard({
  title,
  location,
  startDate,
  endDate,
  price,
  image,
  size = SizeTypes.NORMAL,
  margin = true,
  navigateTo,
}: EventCardProps) {
  function renderEventCard() {
    const defaultStyle = {
      ...styles.eventCard,
      marginRight: margin ? 12 : 0,
    };

    if (size === SizeTypes.NORMAL) return defaultStyle;
    return { ...defaultStyle, width: 300 };
  }

  return (
    <TouchableOpacity style={renderEventCard()} onPress={navigateTo}>
      <ImageBackground
        source={{
          uri: `${BASE_URL}${image}`,
        }}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.5, borderRadius: 10 }}
      >
        <View style={styles.tag}>
          <DefaultText style={styles.text}>{price}</DefaultText>
        </View>

        <DefaultText style={styles.name}>{title}</DefaultText>

        <View style={{ ...styles.details, marginBottom: 7 }}>
          <Pin style={styles.icon} />
          <DefaultText style={styles.text}>{location}</DefaultText>
        </View>

        <View style={styles.details}>
          <Calendar style={styles.icon} />
          <DefaultText style={styles.text}>{startDate}</DefaultText>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
